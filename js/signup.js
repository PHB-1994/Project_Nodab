const checkList = {
  inputPw: false,
  inputPwCheck: false,
  inputEmail: false,
  inputName: false,
  inputPhone: false,
};

$(function () {
  $("#loginBtn").click(loginFn);
  $("#signupResult").click(signupFn);
  $(".idCheck").click(idCheckFn);

  $("#inputPw").on("input", inputPwFn);
  $("#inputPwCheck").on("input", inputPwCheckFn);
  $("#inputEmail").on("input", inputEmailFn);
  $("#inputName").on("input", inputNameFn);
  $("#inputPhone").on("input", inputPhoneFn);
});

// 비밀번호 입력 설정
function inputPwFn(e) {
  e.preventDefault();

  const inputPw = $("#inputPw").val();

  const regExpPw = /^[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (regExpPw.test(inputPw)) {
    $("#pwResult").html("사용 가능한 비밀번호입니다.");
    $("#pwResult").addClass("success");
    $("#pwResult").removeClass("error");
    checkList["inputPw"] = true;
  } else {
    $("#pwResult").html("사용이 불가능한 비밀번호입니다.");
    $("#pwResult").addClass("error");
    $("#pwResult").removeClass("success");
    checkList["inputPw"] = false;
  }
}

// 비밀번호 확인 설정
function inputPwCheckFn(e) {
  e.preventDefault();

  const inputPw = $("#inputPw").val();
  const inputPwCheck = $("#inputPwCheck").val();

  if (inputPw === inputPwCheck) {
    $("#pwCheckResult").html("비밀번호가 일치합니다.");
    $("#pwCheckResult").addClass("success");
    $("#pwCheckResult").removeClass("error");
    checkList["inputPwCheck"] = true;
  } else {
    $("#pwCheckResult").html("비밀번호가 일치하지 않습니다.");
    $("#pwCheckResult").addClass("error");
    $("#pwCheckResult").removeClass("success");
    checkList["inputPwCheck"] = false;
  }
}

// 이메일 확인 설정
function inputEmailFn(e) {
  e.preventDefault();

  $("#emailResult");

  const inputEmail = $("#inputEmail").val();

  const regExpEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (regExpEmail.test(inputEmail)) {
    $("#emailResult").html("유효한 이메일입니다.");
    $("#emailResult").addClass("success");
    $("#emailResult").removeClass("error");
    checkList["inputEmail"] = true;
  } else {
    $("#emailResult").html("유효하지 않는 이메일입니다.");
    $("#emailResult").addClass("error");
    $("#emailResult").removeClass("success");
    checkList["inputEmail"] = false;
  }
}

// 이름 확인 설정
function inputNameFn(e) {
  e.preventDefault();

  const inputName = $("#inputName").val();

  const regExpName = /^[가-힣]{2,15}$/;

  if (regExpName.test(inputName)) {
    $("#namelResult").html("유효한 이름 형식입니다.");
    $("#namelResult").addClass("success");
    $("#namelResult").removeClass("error");
    checkList["inputName"] = true;
  } else {
    $("#namelResult").html("유효하지 않는 이름 형식입니다.");
    $("#namelResult").addClass("error");
    $("#namelResult").removeClass("success");
    checkList["inputName"] = false;
  }
}

// 연락처 확인 설정
function inputPhoneFn(e) {
  e.preventDefault();

  const inputPhone = $("#inputPhone").val();

  // const regExpPhone = /^01[0-9]-[0-9]{4}-[0-9]{4}$/;
  const regExpPhone = /^01[016789]-\d{3,4}-\d{4}$/;

  if (regExpPhone.test(inputPhone)) {
    $("#phonelResult").html(`유효한 연락처입니다.`);
    $("#phonelResult").addClass("success");
    $("#phonelResult").removeClass("error");
    checkList["inputPhone"] = true;
  } else {
    $("#phonelResult").html(`유요하지 않는 연락처입니다.`);
    $("#phonelResult").addClass("error");
    $("#phonelResult").removeClass("success");
    checkList["inputPhone"] = false;
  }
}

// 회원가입 버튼
function signupFn(e) {
  // console.log("데이터 가져옵니까..?");

  if (checkList.inputPw == false) {
    alert("비밀번호가 유효하지 않습니다.");
    $("#inputPw").focus();
    e.preventDefault();
    return;
  }

  if (checkList.inputPwCheck == false) {
    alert("비밀번호가 일치하지 않습니다.");
    $("#inputPwCheck").focus();
    e.preventDefault();
    return;
  }

  if (checkList.inputEmail == false) {
    alert("이메일이 유효하지 않습니다.");
    $("#inputEmail").focus();
    e.preventDefault();
    return;
  }

  if (checkList.inputName == false) {
    alert("이름이 유요하지 않습니다.");
    $("#inputEmailFn").focus();
    e.preventDefault();
    return;
  }

  if (checkList.inputPhone == false) {
    alert("연락처가 유효하지 않습니다.");
    $("#inputPhnoe").focus();
    e.preventDefault();
    return;
  }

  if (checkList) {
    let userList = JSON.parse(sessionStorage.getItem("userList") || "[]");

    const newUser = {
      id: $("#inputId").val(),
      password: $("#inputPw").val(),
      name: $("#inputName").val(),
      createAt: new Date().toLocaleString("ko-KR"),
    };

    userList.push(newUser);

    sessionStorage.setItem("userList", JSON.stringify(userList));
    alert("회원가입이 완료되었습니다.");

    window.location.href = "login.html";
  }
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
}
