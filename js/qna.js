$(function () {
  $(".faq-item").click(faqItemFn);

  $("#submit").click(submitFn);
  $("#qna-register").click(() => {
    $("#qna-register").toggleClass("active");
    qnaFn();
    $(".qna-form").toggleClass("active");
  });
});

// 질문 사항
function faqItemFn() {
  $(".faq-answer").not($(this).children()).slideUp();

  $(this).children(".faq-answer").slideToggle();
}

function submitFn(e) {
  e.preventDefault();
  alert("문의 사항이 제출되었습니다.");

  window.location.href = "../index.html";
}

// 문의사항 버튼
function qnaFn() {
  if (!(Array.isArray(currentUser) && currentUser.length) > 0) {
    alert("로그인을 먼저 해주세요");
    const loginUrl = pageFn("login.html");

    window.location.href = loginUrl;
  }
}
