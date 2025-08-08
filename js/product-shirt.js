$(function () {
  $(".shirt-btn").click(shirtList);

  $(".shirt-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음
  banner();
});

function shirtList() {
  const targetTap = $(this).data("tab");
  $(".shirt-btn").removeClass("active");
  $(this).addClass("active");

  $(".shirt-content").slideUp();
  $("#" + targetTap).slideDown();

  $.get("../json/products.json").done(function (data) {
    console.log("찾기 가능?");
    const shirtCut = data.slice(0, 9);
    const shirtHtml = shirtCut
      .filter((s1) => s1.category === "반팔티")
      .map(
        (s1) =>
          `
          <a href="#" class="shirt-img">
            <img src="${s1.imageUrl}" alt="${s1.category}"/>

          </a>
          `
      )
      .join("");
    $("#" + targetTap).html(shirtHtml);
  });
}

function shirt1() {}

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
