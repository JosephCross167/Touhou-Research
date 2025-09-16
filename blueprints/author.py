from flask import Blueprint, render_template, jsonify
from exts import mail, db
from flask_mail import Message
from flask import request
import string
import random
from models import EmailCaptchaModel

bp = Blueprint("author", __name__, url_prefix="/author")

@bp.route("/login")
def login():
    return render_template("login.html")


@bp.route("/register")
def register():
    return render_template("register.html")

@bp.route("/captcha/email")
def get_email_captcha():
    email = request.args.get("email")
    source = string.digits*4
    captcha = "".join(random.sample(source, 4))
    message = Message("东方小网站", recipients=[email], body=f"您的验证码是{captcha}")
    mail.send(message)
    email_captcha = EmailCaptchaModel(email=email, captcha=captcha)
    db.session.add(email_captcha)
    db.session.commit()
    return jsonify({"code": 200, "message": "", "data": None})

@bp.route("/mail")
def mail_send():
    message = Message(subject="verify", recipients=["13311180498@163.com"], body="您的验证码是")
    mail.send(message)
    return "Success!"
