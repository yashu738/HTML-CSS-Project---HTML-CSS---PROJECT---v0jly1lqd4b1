let otp_boxes = document.querySelectorAll(".otp")
otp_boxes[0].focus()
otp_boxes.forEach((e, i) => {
    e.addEventListener("keydown", (event) => {
        if (i === otp_boxes.length - 1) {
            return;
        }
        if (event.key >= 0 && event.key <= 9) {
            setTimeout(() => {
                otp_boxes[i + 1].focus();
            }, 100);

        }
    });
});
