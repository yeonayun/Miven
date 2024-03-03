document.addEventListener("DOMContentLoaded", function () {
    const studentidTextarea = document.getElementById("studentid-textarea");
    const nameTextarea = document.getElementById("name-textarea");
    const emailTextarea = document.getElementById("email-textarea");
    const writeButton = document.getElementById("write-button");

    // 입력 내용 확인
    function areAllTextareasFilled() {
        return (
            studentidTextarea.value.trim() !== "" &&
            nameTextarea.value.trim() !== "" &&
            emailTextarea.value.trim() !== ""
        );
    }

    // 지원서 쓰러가기 버튼 활성화
    function updateWriteButtonOpacity() {
        if (areAllTextareasFilled()) {
            writeButton.style.opacity = 1;
            writeButton.removeAttribute("disabled");
        } else {
            writeButton.style.opacity = 0.3;
            writeButton.setAttribute("disabled", "disabled");
        }
    }

    studentidTextarea.addEventListener("input", updateWriteButtonOpacity);
    nameTextarea.addEventListener("input", updateWriteButtonOpacity);
    emailTextarea.addEventListener("input", updateWriteButtonOpacity);

    updateWriteButtonOpacity();
});