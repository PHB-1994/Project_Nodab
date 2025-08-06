$(function () {
  $("#login").click(loginFn);
});

function loginFn() {
  const widthPop = "300";
  const heightPop = "300";

  const left = (window.screen.width - widthPop) / 2;
  const top = (window.screen.height - heightPop) / 2;

  const option = `
    width=${widthPop},
    height=${heightPop},
    left=${left},
    top=${top},
  `;

  window.open("login.html", "_blank", option);
}

