$(function () {
  $("#loginBtn").click(loginFn);
  const 전달받은id확인 = new URLSearchParams(window.location.search).get("id");
  console.log("id 값 : ", 전달받은id확인);

  if (전달받은id확인 > 100) {
    indexLoad(전달받은id확인);
  } else {
    productLoad(전달받은id확인);
  }
  kk;
  banner();
});

// 로그인 이동 페이지
function loginFn() {
  window.location.href = "login.html";
}

// index 페이지에 있는 항목을 선택했을 때
function indexLoad(id) {
  $.get("../json/contents.json").done(function (data) {
    const product = data.find((item) => Number(item.id) === Number(id));
    if (product) {
      productDetail(product);
    } else {
      console.log("해당하는 상품이 없습니다.");
    }
  });
}

// product 페이지에 있는 항목을 선택했을 때
function productLoad(id) {
  $.get("../json/products.json").done(function (data) {
    // id에 맞는 상품 찾기
    const product = data.find((item) => Number(item.id) === Number(id)); // 숫자로 변환

    if (product) {
      productDetail(product);
    } else {
      console.log("해당하는 상품이 없습니다.");
    }
  });
}

function productDetail(product) {
  $("#productPoster").attr("src", product.imageUrl);
  $("#productName").text(product.name);
  $("#productCategory").text(product.category);
  $("#infoDescription").text(product.description);
  $("#infoPrice").text(product.price);
}

// 베너
function banner() {
  $.get("../json/banner.json").done(function (data) {
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
