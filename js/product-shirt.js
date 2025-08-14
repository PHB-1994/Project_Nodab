// let page = 1;

$(function () {
  $("#loginBtn").click(loginFn);
  $(".shirt-btn").click(shirtList);

  $(".shirt-btn[data-tab='tab1']").trigger("click"); // 뭐가 뭔지 모르겠음

  // $("#prevBtn").click(prevBtnFn);
  // $("#nextBtn").click(nextBtnFn);

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

// 로그인 이동 페이지
function loginFn() {
  window.location.href = "login.html";
}

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
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <p>색상 : ${s.color}</p>
            <p><span>10%</span> ${Number(s.price).toLocaleString()}원</p>
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
