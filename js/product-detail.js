$(function () {
  const 전달받은id확인 = new URLSearchParams(window.location.search).get("id");
  console.log("id 값 : ", 전달받은id확인);

  loadDetail(전달받은id확인);

  banner();
});

function loadDetail(id) {
  $.get("../json/products.json").done(function (data) {
    // id에 맞는 상품 찾기
    const product = data.find((item) => Number(item.id) === Number(id)); // 숫자로 변환

    if (product) {
      제품상세보기(product);
    } else {
      console.log("해당 id에 맞는 상품이 없습니다.");
    }
  });
}

function 제품상세보기(product) {
  $("#productPoster").attr("src", product.imageUrl);
  $("#productCategory").text(product.category);
  $("#productName").text(product.name);
  $("#infoDescription").text(product.description);
  $("#infoPrice").text(product.price);
  $("#infoSize").text(product.size);
  $("#infoColor").text(product.color);
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
