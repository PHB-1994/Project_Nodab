$(function () {
  $("#loginBtn").click(loginFn);
  bestFn();
  shirtFn();
  pantsFn();
  sportFn();
  coatFn();
  paddingFn();
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
          <a href="#" class="product-item">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <p>${s.name}</p>
            <p>가격 : ${s.price}</p>
          </a>
          `
        )
        .join("")
    );
  });
}

// 리스트 바지 이미지 페이지
function pantsFn() {
  $.get("../json/products.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#pantsResult").html(
      data
        .filter((p) => p.category === "바지")
        .map(
          (p) =>
            `
          <a href="#" class="product-item">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <p>${p.name}</p>
            <p>가격 : ${p.price}</p>
          </a>
          `
        )
        .join("")
    );
  });
}

// 리스트 운동복 이미지 페이지
function sportFn() {
  $.get("../json/products.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#sportResult").html(
      data
        .filter((s) => s.category === "운동복")
        .map(
          (s) =>
            `
          <a href="#" class="product-item">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <p>${s.name}</p>
            <p>가격 : ${s.price}</p>
          </a>
          `
        )
        .join("")
    );
  });
}

// 리스트 코트 이미지 페이지
function coatFn() {
  $.get("../json/products.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#coatResult").html(
      data
        .filter((c) => c.category === "코트")
        .map(
          (c) =>
            `
          <a href="#" class="product-item">
            <img src="${c.imageUrl}" alt="${c.category}"/>
            <p>${c.name}</p>
            <p>가격 : ${c.price}</p>
          </a>
          `
        )
        .join("")
    );
  });
}

// 리스트 패딩 이미지 페이지
function paddingFn() {
  $.get("../json/products.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#paddingResult").html(
      data
        .filter((p) => p.category === "패딩")
        .map(
          (p) =>
            `
          <a href="#" class="product-item">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <p>${p.name}</p>
            <p>가격 : ${p.price}</p>
          </a>
          `
        )
        .join("")
    );
  });
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
