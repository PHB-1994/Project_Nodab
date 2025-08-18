let 현재페이지 = 0;

$(function () {
  bestFn();
  $("#prevBtn").click(prevFn);
  $("#nextBtn").click(nextFn);

  shirtFn();
  pantsFn();
  sportFn();
  coatFn();
  paddingFn();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() === 0) {
      $(".clothes-top").hide();
    } else {
      $(".clothes-top").show();
    }
  });
});

// 베스트 상품 이미지 페이지
function bestFn() {
  $.get("json/contents.json").done(function (data) {
    const filted = data.filter((b) => b.category === "베스트");

    $("#bestResult").html(
      filted
        .map(
          (item) =>
            `
          <div class="best-img" onclick="goToDetail(${item.id})">
            <img src="${item.imageUrl}" alt="${item.category}"/>
            <p class="image-text">${item.text}</p>
          </div>
          `
        )
        .join("")
    );
  });
}

// 다음 페이지 이동
function nextFn() {
  const width = $(".best-img").outerWidth(true) * 3; // 한 페이지당 3개씩

  $.get("json/contents.json").done(function (data) {
    const filted = data.filter((b) => b.category === "베스트");

    let 이미지총개수 = Math.ceil(filted.length / 3);

    if (현재페이지 < 이미지총개수 - 1) {
      현재페이지++;
      $(".best-img").animate({ left: -width * 현재페이지 }, 500);
    } else {
      alert("마지막 페이지입니다.");
    }
  });
}
/// 페이지 끝까지 이동 시 첫 번째 이미지가 다시 보이게 하는 방법을 모르겠음...

// 이전 페이지 이동
function prevFn() {
  const width = $(".best-img").outerWidth(true) * 3; // 한 페이지당 3개씩

  if (현재페이지 > 0) {
    현재페이지--;
    $(".best-img").animate({ left: -width * 현재페이지 }, 500);
  } else {
    alert("첫 번째 페이지입니다.");
  }
}

// 리스트_상의 이미지 페이지
function shirtFn() {
  $.get("json/contents.json").done(function (data) {
    $("#shirtResult").html(
      data
        .filter((s) => s.category === "상의")
        .map(
          (s) =>
            `
          <div class="product-item" onclick="goToDetail(${s.id})">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <div class="product-item-text">
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <strong><span>${s.sale}%</span> ${Number(
              s.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 바지 이미지 페이지
function pantsFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#pantsResult").html(
      data
        .filter((p) => p.category === "바지")
        .map(
          (p) =>
            `
          <div class="product-item" onclick="goToDetail(${p.id})">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <div class="product-item-text">
            <strong>${p.name}</strong>
            <p>${p.description}</p>
            <strong><span>${p.sale}%</span> ${Number(
              p.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 운동복 이미지 페이지
function sportFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#sportResult").html(
      data
        .filter((s) => s.category === "운동복")
        .map(
          (s) =>
            `
          <div class="product-item" onclick="goToDetail(${s.id})">
            <img src="${s.imageUrl}" alt="${s.category}"/>
            <div class="product-item-text">
            <strong>${s.name}</strong>
            <p>${s.description}</p>
            <strong><span>${s.sale}%</span> ${Number(
              s.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 코트 이미지 페이지
function coatFn() {
  $.get("json/contents.json").done(function (data) {
    // const ShirtImg = data.slice(0, 7);
    $("#coatResult").html(
      data
        .filter((c) => c.category === "코트")
        .map(
          (c) =>
            `
          <div class="product-item" onclick="goToDetail(${c.id})">
            <img src="${c.imageUrl}" alt="${c.category}"/>
            <div class="product-item-text">
            <strong>${c.name}</strong>
            <p>${c.description}</p>
            <strong><span>${c.sale}%</span> ${Number(
              c.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// 리스트 패딩 이미지 페이지
function paddingFn() {
  $.get("json/contents.json").done(function (data) {
    $("#paddingResult").html(
      data
        .filter((p) => p.category === "패딩")
        .map(
          (p) =>
            `
          <div class="product-item" onclick="goToDetail(${p.id})">
            <img src="${p.imageUrl}" alt="${p.category}"/>
            <div class="product-item-text">
            <strong>${p.name}</strong>
            <p>${p.description}</p>
            <strong><span>${p.sale}%</span> ${Number(
              p.price
            ).toLocaleString()}원</strong>
            </div>
          </div>
          `
        )
        .join("")
    );
  });
}

// detail 페이지 이동
function goToDetail(id) {
  window.location.href = `pages/product-detail.html?id=${id}`;
}
