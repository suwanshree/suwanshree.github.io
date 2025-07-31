document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("portfolio-switch");
  if (!el) return;

  // true when the URL starts with /design or /design/
  const onDesign = /^\/design.html(\/|$)/.test(window.location.pathname);

  const targetHref = onDesign ? "index.html" : "design.html";
  const targetLabel = onDesign ? "Developer" : "Design";

  // Replace the whole sentence with the correct single link
  el.innerHTML = `Looking for my <a href="${targetHref}">${targetLabel}</a> portfolio?`;
});
