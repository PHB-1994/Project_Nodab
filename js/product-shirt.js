// let page = 1;

$(function () {
  $(".shirt-btn").click(shirtList);

  $(".shirt-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음

  // $("#prevBtn").click(prevBtnFn);
  // $("#nextBtn").click(nextBtnFn);

  banner();
});

// 시작 화면
function shirtList() {
  const targetTap = $(this).data("tab");

  $(".shirt-btn").removeClass("active");
  $("#" + targetTap).addClass("active");

  $(".shirt-content").removeClass("active");
  $("#" + targetTap).addClass("active");

  const categoryMap = {
    tab1: "반팔티",
    tab2: "긴팔티",
    tab3: "셔츠",
  };

  const category = categoryMap[targetTap];

  $.get("../json/products.json").done(function (data) {
    console.log("찾기 가능?");
    const filted = data.filter((s) => s.category === category);
    const shirtHtml = filted
      .map(
        (s) =>
          `
          <div class="shirt-img" onclick="goToDetail(${s.id})" >
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <p>색상 : ${s.color}</p>
            <p>가격 : ${s.price}</p>
          </div>
          `
      )
      .join("");
    const tabNumber = targetTap.replace("tab", "");
    $("#shirtResult" + tabNumber).html(shirtHtml);
  });
}

function goToDetail(shirtId) {
  window.location.href = `product-detail.html?id=${shirtId}`;
}

// 페이지 네이션 처리 방법??
// function prevBtnFn() {
//   if (page > 1) {
//     현재페이지--;
//     shirtPage(현재페이지);
//   }
// }

// function nextBtnFn() {
//   현재페이지++;
//   shirtPage(현재페이지);
// }

// function range(start, end) {
//   return [...Array(end - starg + 1).keys()].map((i) => i + start);
// }

// function shirtPage(page) {
//   const startId = (page - 1) * 1;
//   const ids = range(startId, startId + 11);

//   $("#shirtResult1").html("");

//   $("#pageInfo").html(`페이지${page}`);

//   ids.map((i) => {
//     $.get("../json/products.json").done(function (data) {
//       $("#shirtResult").html(
//         $("#shirtResult").html() +
//           `
//           <a href="#" class="shirt-img">
//             <img src="${s1.imageUrl}" alt="${s1.category}"/>
//             <strong>${s1.name}</strong>
//             <p>${s1.description}</p>
//             <p>색상 : ${s1.color}</p>
//             <p>가격 : ${s1.price}</p>
//           </a>
//           `
//       );
//     });
//   });
// }

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
