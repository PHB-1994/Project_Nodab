$(function () {
  $("#loginBtn2").click(loginFn);
  $(".register-btn").click(registerFn);
});

function loginFn(e) {
  e.preventDefault();
  const userId = $("#userId").val();
  const userPw = $("#userPw").val();

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

  const userList = localStorage.getItem("userList");

  if (!userList) {
    alert("가입된 사용자 정보가 없습니다. 회원가입을 먼저 진행해주세요.");
    return;
  }

  let user = JSON.parse(userList);
  console.log("user : ", user);
}

//   if (username.length > 0) {
//     $("#nameResult").removeClass("error").text("");
//   } else if (password.length > 0) {
//     $("#password").removeClass("error").text("");
//   }

// 회원가입 페이지로 이동
function registerFn() {
  window.location.href = "signup.html";
}
