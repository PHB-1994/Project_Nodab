$(function () {
  $(".sport-btn").click(sportList);

  $(".sport-btn[data-tab='tab1']").trigger("click");
  banner();
});

function sportList() {
  const targetTap = $(this).data("tab");

  $("sport-btn").removeClass("active");
  $("#" + targetTap).addClass("active");

  $(".sport-content").removeClass("active");
  $("#" + targetTap).addClass("active");

  const categoryMap = {
    tab1: "여름용",
    tab2: "겨울용",
  };

  const category = categoryMap[targetTap];

  $.get("../json/products.json").done(function (data) {
    console.log("데이터 가져오기 완료");

    const filted = data.filter((s) => s.category === category);

    const sportHTML = filted
      .map(
        (s) =>
          `
          <a href="#" class="sport-img">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <p>색상 : ${s.color}</p>
            <p>가격 : ${s.price}</p>
          </a>
          `
      )
      .join("");
    const tabNumber = targetTap.replace("tab", "");
    $("#sportResult" + tabNumber).html(sportHTML);
  });
}

// 베너
function banner() {
  $.get("../json/banner.json").done(function (data) {
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
