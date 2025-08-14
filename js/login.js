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
    return;
  } else if (userId.length == 0) {
    $("#nameResult").html(`<div class="error">아이디를 입력해주세요.</div>`);
    $("#pwResult").html("");
    $("#username").focus();
    return;
  } else if (userPw.length == 0) {
    $("#pwResult").html(`<div class="error">비밀번호를 입력해주세요.</div>`);
    $("#nameResult").html("");
    $("#password").focus();
    return;
  }

  const userList = localStorage.getItem("userList");

  let user = JSON.parse(userList);
  console.log("user : ", user);

  if (user[0].id === userId && user[0].password === userPw) {
    $("#nameResult").html("");
    $("#pwResult").html("");
    alert(
      `
      로그인에 성공하였습니다.
      반갑습니다. ${user[0].name}님
      `
    );
    window.open("../index.html");
  } else if (user[0].id === userId) {
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    $("#nameResult").html("");
    $("#pwResult").html("");
    return;
  } else {
    alert("가입된 사용자 정보가 없습니다. 회원가입을 먼저 진행해주세요.");
    $("#nameResult").html("");
    $("#pwResult").html("");
  }
}

// 회원가입 페이지로 이동
function registerFn() {
  window.location.href = "signup.html";
}
