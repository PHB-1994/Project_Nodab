$(function () {
  $(".faq-item").click(faqItemFn);

  $("#submit").click(submitFn);
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
