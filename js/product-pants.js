$(function () {
  banner();
});

// 시작 화면
function pantsList() {
  const targetTap = $(this).data("tab");
  $(".pants-btn").removeClass("active");
  $(this).addClass("active");

  $(".pants-content").slideUp();
  $("#" + targetTap).slideDown();

  $.get("../json/products.json").done(function (data) {
    console.log("찾기 가능?");
    const pantsCut = data.slice(0, 12);
    const pantsHtml = pantsCut
      .filter((s1) => s1.category === "바지")
      .map(
        (s1) =>
          `
          <a href="#" class="shirt-img">
            <img src="${s1.imageUrl}" alt="${s1.category}"/>
            <strong>${s1.name}</strong>
            <p>${s1.description}</p>
            <p>색상 : ${s1.color}</p>
            <p>가격 : ${s1.price}</p>
          </a>
          `
      )
      .join("");
    $("#" + targetTap).html(pantsHtml);
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
