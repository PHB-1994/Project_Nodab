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

function coatList() {
  const targetTab = $(this).data("tab");

  $(".coat-btn").removeClass("active");
  $(this).addClass("active");

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
      .map((c) => {
        const sale = Math.floor(Math.random() * 21) + 10;
        return `
          <div class="coat-img" onclick="goToDetail(${c.id})">
            <span>${c.number}</span>
            <img src="${c.imageUrl}" alt="${c.category}"/>
            <strong>${c.brand}</strong>
            <p>${c.name}</p>
            <p>${c.description}</p>
            <p><em>${sale}%</em> ${Number(c.price).toLocaleString()}원</p>
          </div>
          `;
      })
      .join("");
    const tabNumber = targetTab.replace("tab", "");
    $("#coatResult" + tabNumber).html(coatHTML);
  });
}

function goToDetail(coatId) {
  window.location.href = `product-detail.html?id=${coatId}`;
}
