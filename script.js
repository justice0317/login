// JavaScript 部分，可以根據需求進行額外功能實作，例如表單驗證等
document.querySelector(".btn-confirm").addEventListener("click", function(event) {
    // 這裡可以加入表單驗證的邏輯
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("請填寫電子郵件和密碼");
        event.preventDefault(); // 防止表單提交
    }
});
