document.addEventListener("DOMContentLoaded", function () {
    const motiveTextarea = document.getElementById("motive-textarea");
    const introduceTextarea = document.getElementById("introduce-textarea");
    const prosconsTextarea = document.getElementById("proscons-textarea");
    const submitButton = document.getElementById("submit-button");

    // 입력 내용 확인
    function areAllTextareasFilled() {
        return (
            motiveTextarea.value.trim() !== "" &&
            introduceTextarea.value.trim() !== "" &&
            prosconsTextarea.value.trim() !== ""
        );
    }

    // 제출 버튼 활성화 및 height 크기 변경
    function updateSubmitButtonOpacity() {
        if (areAllTextareasFilled()) {
            submitButton.style.opacity = 1;
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.style.opacity = 0.2;
            submitButton.setAttribute("disabled", "disabled");
        }

        // height 업데이트
        const textareaHeight = Math.max(
            motiveTextarea.scrollHeight,
            introduceTextarea.scrollHeight,
            prosconsTextarea.scrollHeight
        );
        document.querySelectorAll(".box-input textarea").forEach((textarea) => {
            textarea.style.height = textareaHeight + "px";
        });
    }

    motiveTextarea.addEventListener("input", updateSubmitButtonOpacity);
    introduceTextarea.addEventListener("input", updateSubmitButtonOpacity);
    prosconsTextarea.addEventListener("input", updateSubmitButtonOpacity);

    updateSubmitButtonOpacity();
});