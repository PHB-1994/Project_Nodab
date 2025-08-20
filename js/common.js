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
  $("#searchInput").on("input", searchInputFn);
  loadProduct();

  $("#closeModal").click(closeFn);
  // $("#modalOverlay").click(modalOverlayFn);

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
  const loginurl = pageFn("login.html");
  window.location.href = loginurl;
}

// 페이지 반환 매개변수
function pageFn(url) {
  const pageUrl = window.location.pathname.includes("pages")
    ? url // 현재가 pages 안에 있다면
    : "pages/" + url; // 그렇지 않다면

  return pageUrl;
}

// json 반환 매개변수
function jsonFn(url) {
  const jsonUrl = window.location.pathname.includes("pages")
    ? "../json/" + url // 현재가 pages 안에 있다면
    : "json/" + url; // 그렇지 않다면

  return jsonUrl;
}

// 로그인 시 localStorage 에서 데이터 가져와서 sessionStorage 에 저장
function currentFn() {
  if (Array.isArray(currentUser) && currentUser.length > 0) {
    $("#userInfo").text(`${currentUser[0].name}님 환영합니다.`);
    $("#navLogoutBtn").show();
    $("#navLoginBtn").hide();
  }
}

// 문의 사항 페이지 이동
function qnaFn() {
  const pageUrl = pageFn("qna.html");

  window.location.href = pageUrl;
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

// MODAL
function searchFn() {
  $("#modalOverlay").fadeIn(100);
}

function closeFn() {
  $("#modalOverlay").fadeOut(100);
}

// function modalOverlayFn(e) {
//   if (e.target === this) {
//     $("#modalOverlay").fadeOut(100);
//   }
// }

// 검색 기능
let products = [];

function loadProduct() {
  const producturl = jsonFn("products.json");
  $.get(producturl).done(function (data) {
    for (let i = 0; i < data.length; i++) {
      products.push(data[i]);
    }

    // console.log(products);
  });
}

function searchInputFn() {
  const keyword = $("#searchInput").val().trim();

  const allProduct = Object.values(products);

  let result;

  if (keyword) {
    result = allProduct.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.brand.toLowerCase().includes(keyword.toLowerCase())
    );
    displayResults(result, keyword);
  }
}

function displayResults(result, keyword) {
  const searchResults = $("#searchResult");

  if (result.length === 0) {
    searchResults.html(
      `<div class="no-searchResult">검색 결과가 없습니다.</div>`
    );
    return;
  }

  const productHTMLS = result.map((product) => {
    let name = product.name;
    let brand = product.brand;

    if (keyword) {
      name = product.name.replace(
        new RegExp(keyword, "gi"),
        `<span>${keyword}</span>`
      );
      brand = product.brand.replace(
        new RegExp(keyword, "gi"),
        `<span>${keyword}</span>`
      );
    }

    return `
    <div class="product-choice">
      <div class="product-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
      <div class="product-text">
      <span class="product-brand">${brand}</span>
      <span class="product-name">${name}</span>
      </div>
    </div>    
    `;
  });
  searchResults.html(productHTMLS.join(""));
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
