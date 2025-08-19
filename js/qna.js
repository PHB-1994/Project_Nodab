$(function () {
  $(".faq-item").click(faqItemFn);
});

// 질문 사항
function faqItemFn() {
  $(".faq-answer").not($(this).children()).slideUp();

  $(this).children(".faq-answer").slideToggle();
}

