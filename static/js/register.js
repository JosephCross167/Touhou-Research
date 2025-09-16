//导航栏
let present_option = document.getElementById("login");
present_option.style.fontWeight = "bold";

//获取验证码
function GetCaptcha()
{
    event.preventDefault();
    let email = document.getElementById("email").value;
    $.ajax({
        url: "/author/captcha/email?email=" + email,
        method: "GET",
        success: function(result) {
            let code = result.code;
            if(code == 200)
                alert("验证码已发送");
            else
                alert(result.message);
        },
        error: function(xhr, status, error) {
            alert("获取验证码失败");
        }
    });
}