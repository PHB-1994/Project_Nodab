$(function () {
  $("#loginBtn").click(loginFn);
  $("#signupBtn").click(signupFn);
  bestFn();

  shirtFn();
  pantsFn();
  sportFn();
  coatFn();
  paddingFn();

  banner();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

// 로그인 이동 페이지
function loginFn() {
  window.location.href = "pages/login.html";
}

// 회원가입 이동 페이지
function signupFn() {
  window.location.href = "signup.html";
}

// 베스트 상품 이미지 페이지
function bestFn() {
  $.get("json/contents.json").done(function (data) {
    const bestImg = data.slice(0, 3);
    $("#bestResult").html(
      bestImg
        .filter((b) => b.category === "베스트")
        .map(
          (item) =>
            `
          <div class="best-img" onclick="goToDetail(${item.id})">
            <img src="${item.imageUrl}" alt="${item.category}"/>
          </div>
          `
        )
        .join("")
    );
  });
}

// 페이지네이션

// 리스트_상의 이미지 페이지
function shirtFn() {
  $.get("json/contents.json").done(function (data) {
    $("#shirtResult").html(
      data
        .filter((s) => s.category === "상의")
        .map(
          (s) =>
            `
          <div class="product-item" onclick="goToDetail(${s.id})">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <div class="product-item-text">
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <strong><span>10%</span> ${Number(
              s.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 바지 이미지 페이지
function pantsFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#pantsResult").html(
      data
        .filter((p) => p.category === "바지")
        .map(
          (p) =>
            `
          <div class="product-item" onclick="goToDetail(${p.id})">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <div class="product-item-text">
            <strong>${p.name}</strong>
            <p>${p.description}</p>
            <strong><span>10%</span> ${Number(
              p.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 운동복 이미지 페이지
function sportFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#sportResult").html(
      data
        .filter((s) => s.category === "운동복")
        .map(
          (s) =>
            `
          <div class="product-item" onclick="goToDetail(${s.id})">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <div class="product-item-text">
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <strong><span>10%</span> ${Number(
              s.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 코트 이미지 페이지
function coatFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#coatResult").html(
      data
        .filter((c) => c.category === "코트")
        .map(
          (c) =>
            `
          <div class="product-item" onclick="goToDetail(${c.id})">
            <img src="${c.imageUrl}" alt="${c.category}"/>
            <div class="product-item-text">
            <strong>${c.name}</strong>
            <p>${c.description}</p>
            <strong><span>10%</span> ${Number(
              c.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 패딩 이미지 페이지
function paddingFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#paddingResult").html(
      data
        .filter((p) => p.category === "패딩")
        .map(
          (p) =>
            `
          <div class="product-item" onclick="goToDetail(${p.id})">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <div class="product-item-text">
            <strong>${p.name}</strong>
            <p>${p.description}</p>
            <strong><span>10%</span> ${Number(
              p.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// detail 페이지 이동
function goToDetail(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

// 베너
function banner() {
  $.get("json/banner.json").done(function (data) {
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
