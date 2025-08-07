$(function () {
  $("#loginBtn").click(loginFn);
  bestFn();
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

function bestFn() {
  $.get("../json/products.json")
    .done(function (data) {
      console.log("데이터 가져오기 가능?");
      $("#bestResult").html(
        `
        <img src="${data.imageUrl}">
        `
      );
    })
    .fail();
}
