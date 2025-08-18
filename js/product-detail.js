$(function () {
  $("#loginBtn").click(loginFn);
  const 전달받은id확인 = new URLSearchParams(window.location.search).get("id");
  console.log("id 값 : ", 전달받은id확인);

  if (전달받은id확인 > 1000) {
    indexLoad(전달받은id확인);
  } else {
    productLoad(전달받은id확인);
  }
});

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
  $("#brandResult").text(product.brand);
  $("#productName").text(product.name);
  $("#productCategory").text(product.category);
  $("#infoDescription").text(product.description);
  $("#saleResult").text(product.sale);
  $("#infoPrice").text(Number(product.price).toLocaleString());
}
