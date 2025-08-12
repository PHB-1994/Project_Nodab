$(function () {
  $("#loginBtn2").click(loginFn);
});

function loginFn(e) {
  e.preventDefault();
  const username = $("#username").val().trim();
  const password = $("#password").val().trim();

  if (username.length == 0) {
    $("#nameResult").html(`<div class="error">아이디를 입력해주세요.</div>`);
    $("#username").focus();
  } else {
    loginCheck();
  }
  if (password.length == 0) {
    $("#pwResult").html(`<div class="error">비밀번호를 입력해주세요.</div>`);
  }
}
