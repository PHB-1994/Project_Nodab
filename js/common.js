let currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "[]");

$(function () {
  $("#menuBtn").click(menuBtnFn);

  $("#navLoginBtn").click(loginFn);
  $("#navLogoutBtn").click(navLogoutBtnFn);
  $("#navQuestionBtn").click(qnaFn);

  if (currentUser) {
    currentFn();
  }

  $(".search").click(searchFn);
  $("#closeModal").click(closeFn);
  $("#modalOverlay").click(modalOverlayFn);

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });

  $(".menuLink").click(menuLinkFn);
  banner();
});

// 메뉴 버튼 클릭 시
function menuBtnFn() {
  alert("업데이트를 기대해주세요~");
  console.log("menuLink 클릭됨");
  return;
}

// 메뉴 링크 클릭시 이동 페이지
function menuLinkFn() {
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

// 로그인 시 localStorage 에서 데이터 가져와서 sessionStorage 에 저장
function currentFn() {
  if (Array.isArray(currentUser) && currentUser.length > 0) {
    $("#userInfo").text(`${currentUser[0].name}님 환영합니다.`);
    $("#navLogoutBtn").show();
    $("#navLoginBtn").hide();
  }
}

// 로그아웃 버튼
function navLogoutBtnFn() {
  sessionStorage.removeItem("currentUser");
  alert("로그아웃이 완료되었습니다.");

  const loginUrl = window.location.pathname.includes("/pages/")
    ? "../index.html"
    : "index.html";

  window.location.href = loginUrl;
}

// 문의사항 버튼
function qnaFn() {
  if (Array.isArray(currentUser) && currentUser.length > 0) {
    const qnaUrl = window.location.pathname.includes("pages")
      ? "qna.html"
      : "pages/qna.html";

    window.location.href = qnaUrl;
  } else {
    alert("로그인을 먼저 해주세요");
    const loginUrl = window.location.pathname.includes("pages")
      ? "login.html" // 현재가 pages 안에 있다면
      : "pages/login.html"; // 그렇지 않다면

    window.location.href = loginUrl;
  }
}

// MODAL
function searchFn() {
  $("#modalOverlay").fadeIn(100);
}

function closeFn() {
  $("#modalOverlay").fadeOut(100);
}

function modalOverlayFn(e) {
  if (e.target === this) {
    $("#modalOverlay").fadeOut(100);
  }
}

// 베너
function banner() {
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
