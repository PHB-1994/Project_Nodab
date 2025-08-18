$(function () {
  $("#menuBtn").click(menuBtnFn);

  $("#navLoginBtn").click(loginFn);

  banner();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });

  $(".menuLink").click(menuLinkFn);
});

// 메뉴 버튼 클릭 시
function menuBtnFn() {
  alert("업데이트를 기대해주세요.");
  return;
}

// 로그인 이동 페이지
function loginFn() {
  const loginUrl = window.location.pathname.includes("pages")
    ? "login.html" // 현재가 pages 안에 있다면
    : "pages/login.html"; // 그렇지 않다면

  window.location.href = loginUrl;
}

// 메뉴 링크 클릭시 이동 페이지
function menuLinkFn() {
  alert("업데이트를 기대해주세요.");
  return;
}

// 베너
function banner() {
  // 현재 페이지의 경로 확인
  const jsonPath = window.location.pathname.includes("/pages/")
    ? "../json/banner.json"
    : "json/banner.json";

  $.get(jsonPath).done(function (data) {
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
