// UluntuXD shared front-end helpers
document.addEventListener("DOMContentLoaded", () => {
  console.log("UluntuXD site ready");

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const copyBtn = document.getElementById("copy-code-btn");
  const codeEl = document.getElementById("referral-code-value");
  const statusEl = document.getElementById("copy-status");

  if (copyBtn && codeEl && statusEl) {
    copyBtn.addEventListener("click", async () => {
      const codeText = codeEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(codeText);
        statusEl.textContent = `Copied "${codeText}" to clipboard.`;
      } catch {
        statusEl.textContent = `Referral code: ${codeText}`;
      }
    });
  }
});