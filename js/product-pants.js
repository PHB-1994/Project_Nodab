$(function () {
  $("#loginBtn").click(loginFn);
  $(".pants-btn").click(pantsList);

  $(".pants-btn[data-tab='tab1']").trigger("click");

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
function pantsList() {
  const targetTab = $(this).data("tab");

  $(".pants-btn").removeClass("active");
  $(this).addClass("active");

  $(".pants-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "반바지",
    tab2: "긴바지",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    console.log("찾기 가능?");

    const filted = data.filter((p) => p.category === category);

    const pantsHtml = filted
      .map(
        (p) =>
          `
          <div class="pants-img" onclick="goToDetail(${p.id})">
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
    $("#pantsResult" + tabNumber).html(pantsHtml);
  });
}

function goToDetail(pantsId) {
  window.location.href = `product-datail.html?id=${pantsId}`;
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
