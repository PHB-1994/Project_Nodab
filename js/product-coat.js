$(function () {
  $("#loginBtn").click(loginFn);
  $(".coat-btn").click(coatList);

  $(".coat-btn[data-tab='tab1']").trigger("click");

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

function coatList() {
  const targetTab = $(this).data("tab");

  $(".coat-btn").removeClass("active");
  $("#" + targetTab).addClass("active");

  $(".coat-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "코트 여름용",
    tab2: "코트 겨울용",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    console.log("데이터 가져왔습니까?");

    const filted = data.filter((c) => c.category === category);

    const coatHTML = filted
      .map(
        (c) =>
          `
          <a href="#" class="coat-img">
            <img src="${c.imageUrl}" alt="${c.category}"/>
            <strong>${c.name}</strong>
            <p>${c.description}</p>
            <p>색상 : ${c.color}</p>
            <p>가격 : ${c.price}</p>
          </a>
          `
      )
      .join("");
    const tabNumber = targetTab.replace("tab", "");
    $("#coatResult" + tabNumber).html(coatHTML);
  });
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
