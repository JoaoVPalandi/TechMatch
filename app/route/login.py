from flask import Blueprint, request, render_template, redirect, url_for

login_bp = Blueprint('login_bp', __name__)

@login_bp.route('/')
def login_page():
    return render_template('login.html')