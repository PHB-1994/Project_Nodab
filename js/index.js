$(function () {
  $("#loginBtn").click(loginFn);
  bestFn();
  상의();
  $("#imageInfoResult").click(상의이동);
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
  $.get("../json/products.json").done(function (data) {
    console.log("데이터 가져오기 가능?");
    $("#bestResult").html(
      data.map(
        (bimg) =>
          `
          <div class="best-list">
            <img src="${bimg.imageUrl}"/>
          </div>
          `
      )
    );
  });
}

function 상의() {
  $.get("../json/products.json").done(function (data) {
    console.log("데이터 가져왓나?");
    $("#imageInfoResult").html(
      data.map(
        (info) => `
        <div class="list-image">
          <div class="image-info">
          <img src="${info.imageUrl}" alt="상의" />
          <div>
          <p>${info.name}</p>
          <p>가격 : ${info.price}</p>
        </div>

        `
      )
    );
  });
}

function 상의이동() {
  window.open("product-detail.html", "_blank");
}
