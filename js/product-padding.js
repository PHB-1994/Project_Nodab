$(function () {
  $(".padding-btn").click(paddingList);

  $(".padding-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음
});

// 시작 화면
function paddingList() {
  const targetTab = $(this).data("tab");

  $(".padding-btn").removeClass("active");
  $(this).addClass("active");

  $(".padding-content").removeClass("active");
  $("#" + targetTab).addClass("active");

  const categoryMap = {
    tab1: "숏패딩",
    tab2: "롱패딩",
  };

  const category = categoryMap[targetTab];

  $.get("../json/products.json").done(function (data) {
    const filted = data.filter((p) => p.category === category);
    const paddingHtml = filted
      .map((p) => {
        const sale = Math.floor(Math.random() * 21) + 10;
        return `
          <div class="padding-img" onclick="goToDetail(${p.id})" >
            <span>${p.number}</span>
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <strong>${p.brand}</strong>
            <p>${p.name}</p>
            <p>${p.description}</p>
            <p><em>${sale}%</em> ${Number(p.price).toLocaleString()}원</p>
          </div>
          `;
      })
      .join("");
    const tabNumber = targetTab.replace("tab", "");
    $("#paddingResult" + tabNumber).html(paddingHtml);
  });
}

function goToDetail(paddingId) {
  window.location.href = `product-detail.html?id=${paddingId}`;
}
