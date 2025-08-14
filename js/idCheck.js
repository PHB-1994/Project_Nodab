$(function () {
  $("#check").click(checkFn);
  $("#send").click(sendFn);
});

// 중복 확인 버튼
function checkFn(e) {
  e.preventDefault();

  const userId = $("#userId").val();

  let userList = JSON.parse(localStorage.getItem("users") || "[]");

  const isDup = userList.some((u) => u.id === userId);

  const regExpId = /^[A-Za-z0-9]{4,12}$/;

  if (!regExpId.test(userId)) {
    $("#result").html(
      `<span style="color: orange">아이디는 영문과 숫자 조합의 4~12자여야 합니다.</span>`
    );
    $("#send").prop("disabled", true);
    return;
  }

  if (isDup) {
    $("#result").html(
      `<span style="color: red">이미 사용중인 아이디입니다.</span>`
    );
  } else {
    $("#result").html(
      `<span style="color: green">사용 가능한 아이디입니다.</span>`
    );
  }
  $("#send").prop("disabled", false);
}

function sendFn() {
  opener.$("#inputId").val($("#userId").val());
  window.close();
}
