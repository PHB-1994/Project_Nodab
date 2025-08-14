$(function () {
  $("#loginBtn").click(loginFn);
  $("#signupResult").click(signupFn);
  $(".idCheck").click(idCheckFn);

  const checkList = {
    inputId: false,
    inputPw: false,
    inputPwCheck: false,
    inputEmail: false,
    inputPhone: false,
  };
});

// 로그인 페이지 이동
function loginFn() {
  window.location.href = "login.html";
}

// 회원가입 버튼
function signupFn() {
  console.log("데이터 가져옵니까..?");

  const inputId = $("#inputId").val();
  const inputPw = $("#inputPw").val();
  const inputPwCheck = $("#inputPwCheck").val();
  const inputEmail = $("#inputEmail").val();
  const inputPhone = $("#inputPhone").val();

  const regExpId = /^[A-Za-z0-9\-\_]{6,16}$/;
  const regExpName = /^[가-힣]{2,15}$/;
  const regExpPw = /^[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (inputId.trim().length == 0) {
    $("#idResult").html("영어, 숫자, -, 6 ~ 16글자 사이 작성하세요.");
    inputId = "";
    idResult.classList.remove("check", "error");
    checkList["inputId"] = false;
    return;
  }
  let newUser = {
    id: inputId,
    password: inputPw,
    passwordCheck: inputPwCheck,
    email: inputEmail,
    phone: inputPhone,
  };
}

// 아이디 중복 확인 페이지 이동
function idCheckFn() {
  const idWidth = "400";
  const idHeight = "400";

  const left = (window.screen.width - idWidth) / 2;
  const top = (window.screen.height - idHeight) / 2;

  const options = `
  width=${idWidth},
  height=${idHeight},
  left=${left},
  top=${top},
  `;

  window.open("idCheck.html", "_blank", options);
  console.log("안떠져?");
}
