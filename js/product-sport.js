$(function () {
  $("#loginBtn").click(loginFn);
  $(".sport-btn").click(sportList);

  $(".sport-btn[data-tab='tab1']").trigger("click");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

function sportList() {
  const targetTab = $(this).data("tab");

  $(".sport-btn").removeClass("active");
  $(this).addClass("active");

  $(".sport-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "여름용",
    tab2: "겨울용",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    console.log("데이터 가져오기 완료");

    const filted = data.filter((s) => s.category === category);

    const sportHTML = filted
      .map(
        (s) =>
          `
          <div class="sport-img" onclick="goToDetail(${s.id})">
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
    $("#sportResult" + tabNumber).html(sportHTML);
  });
}

function goToDetail(sportId) {
  window.location.href = `product-detail.html?id=${sportId}`;
}
