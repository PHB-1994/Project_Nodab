const userList = JSON.parse(localStorage.getItem("userList") || "[]");

const checkList = {
  inputId: false,
  inputPw: false,
  inputPwCheck: false,
  inputEmail: false,
  inputName: false,
  inputPhone: false,
};

$(function () {
  $("#signupResult").click(signupFn);

  $(".idCheck").click(inputIdFn);
  $("#inputPw").on("input", inputPwFn);
  $("#inputPwCheck").on("input", inputPwCheckFn);
  $("#inputEmail").on("input", inputEmailFn);
  $("#inputName").on("input", inputNameFn);
  $("#inputPhone").on("input", inputPhoneFn);
});

// 아이디 입력 설정
function inputIdFn(e) {
  e.preventDefault();

  const inputId = $("#inputId").val().trim();

  const regExpId = /^[A-Za-z0-9]{4,12}$/;

  const isDup = userList.some((u) => u.id === inputId);

  if (!regExpId.test(inputId)) {
    $("#idResult").html(
      `<span style="color: orange">아이디는 영문과 숫자 조합의 4~12자여야 합니다.</span>`
    );
    checkList["inputId"] = false;
    return;
  }

  if (isDup) {
    $("#idResult").html(
      `<span style="color: red">이미 사용중인 아이디입니다.</span>`
    );
    checkList["inputId"] = false;
    return;
  } else {
    $("#idResult").html(
      `<span style="color: green">사용 가능한 아이디입니다.</span>`
    );
    checkList["inputId"] = true;
  }
}

// 비밀번호 입력 설정
function inputPwFn(e) {
  e.preventDefault();

  const inputPw = $("#inputPw").val().trim();

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

  const inputPw = $("#inputPw").val().trim();
  const inputPwCheck = $("#inputPwCheck").val().trim();

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

  const inputEmail = $("#inputEmail").val().trim();

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

  const inputName = $("#inputName").val().trim();

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

  const inputPhone = $("#inputPhone").val().trim();

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

  e.preventDefault();

  if (checkList.inputId == false) {
    alert("아이디 중복확인을 먼저 해주세요");
    $("#inputId").focus();
    return;
  }

  if (checkList.inputPw == false) {
    alert("비밀번호가 유효하지 않습니다.");
    $("#inputPw").focus();
    return;
  }

  if (checkList.inputPwCheck == false) {
    alert("비밀번호가 일치하지 않습니다.");
    $("#inputPwCheck").focus();

    return;
  }

  if (checkList.inputEmail == false) {
    alert("이메일이 유효하지 않습니다.");
    $("#inputEmail").focus();

    return;
  }

  if (checkList.inputName == false) {
    alert("이름이 유요하지 않습니다.");
    $("#inputEmailFn").focus();
    return;
  }

  if (checkList.inputPhone == false) {
    alert("연락처가 유효하지 않습니다.");
    $("#inputPhnoe").focus();
    return;
  }

  if (checkList) {
    const newUser = {
      id: $("#inputId").val(),
      password: $("#inputPw").val(),
      name: $("#inputName").val(),
      createAt: new Date().toLocaleString("ko-KR"),
    };

    userList.push(newUser);

    localStorage.setItem("userList", JSON.stringify(userList));
    alert("회원가입이 완료되었습니다.");

    window.location.href = "login.html";
  }
}
