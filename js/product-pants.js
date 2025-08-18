$(function () {
  $(".pants-btn").click(pantsList);

  $(".pants-btn[data-tab='tab1']").trigger("click");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

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
      .map((p) => {
        const sale = Math.floor(Math.random() * 21) + 10;
        return `
          <div class="pants-img" onclick="goToDetail(${p.id})">
            <span>${p.number}</span>
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <strong>${p.brand}</strong>
            <p>${p.name}</p>
            <p>${p.description}</p>
            <p><em>${sale}%</em>  ${Number(p.price).toLocaleString()}원</p>
          </div>
          `;
      })
      .join("");
    const tabNumber = targetTab.replace("tab", "");
    $("#pantsResult" + tabNumber).html(pantsHtml);
  });
}

function goToDetail(pantsId) {
  window.location.href = `product-detail.html?id=${pantsId}`;
}
