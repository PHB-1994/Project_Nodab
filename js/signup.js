$(function () {
  $("#loginBtn").click(loginFn);
  $("#signupBtn").click(signupFn);
});

// 로그인 페이지 이동
function loginFn() {
  window.location.href = "login.html";
}

function signupFn() {
  const inputId = $("#inputId").val();
  const inputPw = $("#inputPw").val();
  const inputPwCheck = $("#inputPwCheck").val();
  const inputEmail = $("#inputEmail").val();
  const inputPhone = $("#inputPhone").val();

  let newUser = {
    id: inputId,
    password: inputPw,
    email: inputEmail,
    phone: inputPhone,
  };

  localStorage.setItem("userInfo", JSON.stringify(newUser));
  console.log("데이터를?");

  if (newUser) {
    alert("회원가입이 완료되었습니다.");
    window.location.href = "login.html";
  }
}
