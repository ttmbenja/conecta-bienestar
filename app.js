/* Conecta Bienestar — interacción */
(() => {
  document.documentElement.classList.add("js");
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const icon = (name) => `<svg class="ic" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const FIELD_ICONS = {
    descripcion: "info", quienes: "users", requisitos: "list-checks", cobertura: "layers",
    pasos: "compass", canal: "map-pin", consultas: "headset", vigencia: "calendar",
  };
  const TBD = `<span class="tbd">${icon("info")}Por completar con información oficial</span>`;

  /* ---------- Catálogo ---------- */
  const grid = $("#benefitGrid");
  grid.innerHTML = BENEFICIOS.map((b) => `
    <button class="card reveal" type="button" data-id="${b.id}" data-cat="${b.categoria}" aria-haspopup="dialog">
      <span class="card__top">
        <span class="card__ic">${icon(b.icono)}</span>
        <span class="card__cat">${esc(CATEGORIAS[b.categoria])}</span>
      </span>
      <h3>${esc(b.nombre)}</h3>
      <p>${esc(b.resumen)}</p>
      <span class="card__foot">Ver ficha <span class="card__go">${icon("arrow-right")}</span></span>
    </button>`).join("");

  // Filtros
  const chips = $("#chips");
  const cats = [["todos", "Todos"], ...Object.entries(CATEGORIAS)];
  chips.innerHTML = cats.map(([k, v], i) =>
    `<button class="chip" type="button" data-cat="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join("");

  let currentCat = "todos";
  const search = $("#search");
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function applyFilter() {
    const q = norm(search.value.trim());
    let visible = 0;
    $$(".card", grid).forEach((card) => {
      const b = BENEFICIOS.find((x) => x.id === card.dataset.id);
      const okCat = currentCat === "todos" || b.categoria === currentCat;
      const okQ = !q || norm(`${b.nombre} ${b.resumen} ${CATEGORIAS[b.categoria]}`).includes(q);
      const show = okCat && okQ;
      card.classList.toggle("is-hidden", !show);
      if (show) { card.classList.add("in"); visible++; }
    });
    $("#emptyState").hidden = visible > 0;
  }
  chips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    currentCat = btn.dataset.cat;
    $$(".chip", chips).forEach((c) => c.setAttribute("aria-pressed", String(c === btn)));
    applyFilter();
  });
  search.addEventListener("input", applyFilter);

  /* ---------- Ficha (modal) ---------- */
  const modal = $("#modal");
  let lastTrigger = null;

  function openBenefit(id, trigger) {
    const b = BENEFICIOS.find((x) => x.id === id);
    if (!b) return;
    lastTrigger = trigger || null;
    $("#mIcon").innerHTML = icon(b.icono);
    $("#mCat").textContent = CATEGORIAS[b.categoria];
    $("#mTitle").textContent = b.nombre;
    $("#mBody").innerHTML = CAMPOS_FICHA.map((f) => `
      <div class="modal__row">
        <dt>${icon(FIELD_ICONS[f.key])}<span>${esc(f.label)}</span><small>${esc(f.ayuda)}</small></dt>
        <dd>${b[f.key] ? esc(b[f.key]) : TBD}</dd>
      </div>`).join("");
    $("#mAsk").dataset.id = b.id;
    modal.classList.remove("is-closing");
    modal.showModal();
    $("#mBody").scrollTop = 0;
    history.replaceState(null, "", `#beneficio-${b.id}`);
  }

  function closeModal() {
    if (!modal.open || modal.classList.contains("is-closing")) return;
    modal.classList.add("is-closing");
    const done = () => {
      modal.classList.remove("is-closing");
      modal.close();
      history.replaceState(null, "", "#beneficios");
      lastTrigger?.focus({ preventScroll: true });
    };
    reduceMotion ? done() : setTimeout(done, 240);
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openBenefit(card.dataset.id, card);
  });
  $("#mClose").addEventListener("click", closeModal);
  modal.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  $("#mAsk").addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    closeModal();
    setTimeout(() => {
      $("#fBenefit").value = id;
      $("#contacto").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      setTimeout(() => $("#fMsg").focus({ preventScroll: true }), 500);
    }, 260);
  });

  // Arrastrar hacia abajo para cerrar (móvil)
  const panel = $(".modal__panel");
  let startY = null, startT = 0, dy = 0;
  panel.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch" || innerWidth >= 760) return;
    const body = $("#mBody");
    if (body.contains(e.target) && body.scrollTop > 0) return;
    startY = e.clientY; startT = performance.now(); dy = 0;
  });
  panel.addEventListener("pointermove", (e) => {
    if (startY === null) return;
    dy = e.clientY - startY;
    if (dy > 0) { panel.style.transition = "none"; panel.style.transform = `translateY(${dy}px)`; }
    else if (dy < 0) { panel.style.transition = "none"; panel.style.transform = `translateY(${dy * 0.15}px)`; }
  });
  const endDrag = () => {
    if (startY === null) return;
    const v = Math.abs(dy) / (performance.now() - startT);
    panel.style.transition = ""; panel.style.transform = "";
    if (dy > 120 || (dy > 20 && v > 0.11)) closeModal();
    startY = null;
  };
  panel.addEventListener("pointerup", endDrag);
  panel.addEventListener("pointercancel", endDrag);

  /* ---------- Novedades ---------- */
  $("#newsList").innerHTML = NOVEDADES.map((n) => `
    <article class="news-card reveal">
      <span class="news-card__tag">${icon("bell")}${esc(n.tipo)}</span>
      <h3>${esc(n.titulo)}</h3>
      <p>${esc(n.texto)}</p>
      <button class="link" type="button" data-open="${n.beneficio}">Ver beneficio ${icon("arrow-right")}</button>
    </article>`).join("");
  $("#newsList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-open]");
    if (b) openBenefit(b.dataset.open, b);
  });

  /* ---------- Preguntas frecuentes ---------- */
  $("#faqList").innerHTML = FAQ.map((f, i) => `
    <div class="qa">
      <button class="qa__q" type="button" aria-expanded="false" aria-controls="qa${i}" id="qq${i}">
        <span>${esc(f.p)}</span>${icon("chevron-down")}
      </button>
      <div class="qa__a" id="qa${i}" role="region" aria-labelledby="qq${i}"><div><p>${esc(f.r)}</p></div></div>
    </div>`).join("");
  $("#faqList").addEventListener("click", (e) => {
    const q = e.target.closest(".qa__q");
    if (!q) return;
    const item = q.parentElement;
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    q.setAttribute("aria-expanded", String(open));
  });

  /* ---------- Formulario demostrativo ---------- */
  const sel = $("#fBenefit");
  sel.innerHTML = `<option value="general">Consulta general</option>` +
    BENEFICIOS.map((b) => `<option value="${b.id}">${esc(b.nombre)}</option>`).join("");
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = $("#fMsg");
    const fld = msg.closest(".fld");
    if (!msg.value.trim()) {
      fld.classList.add("has-error"); $("#fErr").hidden = false; msg.focus();
      return;
    }
    fld.classList.remove("has-error"); $("#fErr").hidden = true;
    e.target.reset();
    toast("Consulta registrada (demostración). En la versión real llegaría al área de Bienestar.");
  });
  $("#fMsg").addEventListener("input", (e) => {
    if (e.target.value.trim()) { e.target.closest(".fld").classList.remove("has-error"); $("#fErr").hidden = true; }
  });

  let toastTimer;
  function toast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 4200);
  }

  /* ---------- Menú móvil ---------- */
  const sheet = $("#sheet");
  const menuBtn = $("#menuBtn");
  function openSheet() {
    sheet.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add("is-open")));
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    setTimeout(() => $(".sheet__panel a", sheet).focus({ preventScroll: true }), 50);
  }
  function closeSheet(focusBack = true) {
    sheet.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => { sheet.hidden = true; }, reduceMotion ? 0 : 320);
    if (focusBack) menuBtn.focus({ preventScroll: true });
  }
  menuBtn.addEventListener("click", openSheet);
  sheet.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeSheet();
    if (e.target.closest("a")) closeSheet(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !sheet.hidden) closeSheet(); });

  /* ---------- Barra superior + sección activa ---------- */
  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = $$(".nav a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));

  /* ---------- Revelado al hacer scroll ---------- */
  const groups = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$(".reveal").forEach((el) => {
    // escalonado corto entre hermanos
    const parent = el.parentElement;
    const i = groups.get(parent) || 0;
    groups.set(parent, i + 1);
    el.style.setProperty("--d", `${Math.min(i, 6) * 50}ms`);
    io.observe(el);
  });

  /* ---------- Video ---------- */
  const video = $("#promo");
  const frame = video.closest(".video-frame");
  $("#videoPlay").addEventListener("click", () => { video.play(); });
  video.addEventListener("play", () => frame.classList.add("is-playing"));
  video.addEventListener("pause", () => { if (video.ended || video.currentTime === 0) frame.classList.remove("is-playing"); });
  video.addEventListener("ended", () => frame.classList.remove("is-playing"));

  /* ---------- Enlace directo a una ficha (#beneficio-id) ---------- */
  const m = location.hash.match(/^#beneficio-(.+)$/);
  if (m) {
    $("#beneficios").scrollIntoView();
    openBenefit(m[1], $(`.card[data-id="${m[1]}"]`));
  }
})();
