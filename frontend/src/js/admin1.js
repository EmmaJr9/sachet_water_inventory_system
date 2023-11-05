window.addEventListener("DOMContentLoaded", () => {
      changePage("dashboard");
});

document.getElementById('sign_out').addEventListener("click", function () {
      window.eval("window.location.replace('/')");
      invoke('login_resize');
});