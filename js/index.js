$(function () {
  $("#loginBtn").click(loginFn);
  bestFn();
  shirtFn();
  // $("#imageInfoResult").click(상의이동);

  banner();
});

// 로그인 이동 페이지
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

// 베스트 상품 이미지 페이지
function bestFn() {
  $.get("../json/products.json").done(function (data) {
    const bestImg = data.slice(0, 3);
    $("#bestResult").html(
      bestImg
        .filter((b) => b.category === "베스트")
        .map(
          (bimg) =>
            `
          <div class="best-img">
            <img src="${bimg.imageUrl}"/>
          </div>
          `
        )
    );
  });
}

// 리스트_상의 이미지 페이지
function shirtFn() {
  $.get("../json/products.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#shirtResult").html(
      data
        .filter((s) => s.category === "상의")
        .map(
          (s) =>
            `
          <a href="#">
          <div class="image-info">
            <img src="${s.imageUrl}" alt="상의"/>
            <p>${s.name}</p>
            <p>가격 : ${s.price}</p>
          </div>
          </a>
          `
        )
        .join("")
    );
  });
}

function 상의이동() {
  window.open("product-detail.html", "_blank");
}

function banner() {
  $.get("../json/banner.json").done(function (data) {
    console.log("데이터?");
    $("#bannerResult").html(
      `
      <div class="ban-info">
      <p class="ban-text">© ${data.brand}</p>
      <p class="ban-text">${data.company}</p>
      <p class="ban-text">${data.adress}</p>
      <p class="ban-text">${data.a}</p>
      <p class="ban-text">${data.b}</p>
      <p class="ban-text">${data.c}</p>
      <p class="ban-text">${data.d}</p>
      </div>
      `
    );
  });
}
