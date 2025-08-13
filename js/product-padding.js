$(function () {
  $("#loginBtn").click(loginFn);
  $(".padding-btn").click(paddingList);

  $(".padding-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음

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
  window.location.href = "login.html";
}

// 시작 화면
function paddingList() {
  const targetTab = $(this).data("tab");

  $(".padding-btn").removeClass("active");
  $(this).addClass("active");

  $(".padding-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "숏패딩",
    tab2: "롱패딩",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    const filted = data.filter((p) => p.category === category);
    const paddingHtml = filted
      .map(
        (p) =>
          `
          <div class="padding-img" onclick="goToDetail(${p.id})" >
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <strong>${p.name}</strong>
            <p>${p.description}</p>
            <p>색상 : ${p.color}</p>
            <p><span>10%</span> ${Number(p.price).toLocaleString()}원</p>
          </div>
          `
      )
      .join("");
    const tabNumber = targetTab.replace("tab", "");
    $("#paddingResult" + tabNumber).html(paddingHtml);
  });
}

function goToDetail(paddingId) {
  window.location.href = `product-detail.html?id=${paddingId}`;
}

// 베너
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
