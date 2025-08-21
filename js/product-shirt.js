$(function () {
  $(".shirt-btn").click(shirtList);

  $(".shirt-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

// 시작 화면
function shirtList() {
  const targetTab = $(this).data("tab");

  $(".shirt-btn").removeClass("active");
  $(this).addClass("active");

  $(".shirt-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "반팔티",
    tab2: "긴팔티",
    tab3: "셔츠",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    console.log("찾기 가능?");

    const filted = data.filter((s) => s.category === category);

    const shirtHtml = filted
      .map(
        (s) =>
          `
        <div class="shirt-img" onclick="goToDetail(${s.id})" >
          <span>${s.number}</span>
          <img src="${s.imageUrl}" alt="${s.category}"/>
          <strong>${s.brand}</strong>
          <p>${s.name}</p>
          <p>${s.description}</p>
          <p><em>${s.sale}%</em>  ${Number(s.price).toLocaleString()}원</p>
        </div>
      `
      )
      .join("");

    const tabNumber = targetTab.replace("tab", "");
    $("#shirtResult" + tabNumber).html(shirtHtml);
  });
}

function goToDetail(shirtId) {
  window.location.href = `product-detail.html?id=${shirtId}`;
}
