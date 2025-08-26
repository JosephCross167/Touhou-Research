from flask import Blueprint

bp = Blueprint("author", __name__, url_prefix="/author")

@bp.route("/login")
def login():
    pass


@bp.route("/register")
def register():
    return render_template("register.html")