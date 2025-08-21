$(function () {
  $("#loginBtn").click(loginFn);
  $(".register-btn").click(registerFn);
  $("#kakaoBtn").click(kakaoFn);
  $("#appleBtn").click(appleFn);
});

// 로그인 정보 가져와서 정보 입력
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

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  const userInfo = userList.find(
    (u) => u.id === userId && u.password === userPw
  );

  if (userInfo) {
    const newUser = {
      id: $("#userId").val(),
      password: $("#userPw").val(),
      name: userInfo.name,
    };

    currentUser.push(newUser);

    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

    $("#nameResult").html("");
    $("#pwResult").html("");
    alert(
      `
      로그인에 성공하였습니다.
      반갑습니다. ${userInfo.name}님
      `
    );
    // history.back(); 이전 페이지로 이동인데 문의 사항 페이지에서 이동 시 문의 사항 페이지로만 돌아가기 설정 해야함
    window.location.href = "../index.html";
  } else if (!userInfo) {
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

// 카카오 로그인 페이지 이동
function kakaoFn() {
  const width = 600;
  const height = 700;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const options = `
            width=${width},
            height=${height},
            left=${left},
            top=${top},
            `;

  window.open(
    "https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount#login",
    "_blank",
    options
  );
}

// 애플 로그인 페이지 이동
function appleFn() {
  const width = 600;
  const height = 700;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const options = `
            width=${width},
            height=${height},
            left=${left},
            top=${top},
            `;

  window.open(
    "https://iforgot.apple.com/password/verify/appleid",
    "_blank",
    options
  );
}
