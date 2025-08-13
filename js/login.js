$(function () {
  $("#loginBtn2").click(loginFn);
});

function loginFn(e) {
  e.preventDefault();
  const userId = $("#userId").val().trim();
  const userPw = $("#userPw").val().trim();

  if (userId.length == 0 && userPw.length == 0) {
    $("#nameResult").html(`<div class="error">아이디를 입력해주세요.</div>`);
    $("#pwResult").html(`<div class="error">비밀번호를 입력해주세요.</div>`);
    $("#username").focus();
  } else if (userId.length == 0) {
    $("#nameResult").html(`<div class="error">아이디를 입력해주세요.</div>`);
    $("#username").focus();
  } else if (userPw.length == 0) {
    $("#pwResult").html(`<div class="error">비밀번호를 입력해주세요.</div>`);
    $("#password").focus();
    return;
  } else {
    loginCheck();
  }
}

function loginCheck(e) {
  e.preventDefault();

  const userInfo = localStorage.getItem("userInfo");
}

//   if (username.length > 0) {
//     $("#nameResult").removeClass("error").text("");
//   } else if (password.length > 0) {
//     $("#password").removeClass("error").text("");
//   }
