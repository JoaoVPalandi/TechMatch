from flask import Blueprint, request, render_template, redirect, url_for
from app.database import get_db
from app.models.usuario import Usuario
from app.schema.usuario import UsuarioCadastro, UsuarioLogin, UsuarioResposta

usuario_bp = Blueprint('usuario', __name__)


@usuario_bp.route('/registro', methods=['GET'])
def registro_page():
    return render_template('registro.html')


@usuario_bp.route('/registro', methods=['POST'])
def criar_usuario():
    pass


@usuario_bp.route('/login', methods=['POST'])
def login():
    pass


@usuario_bp.route('/usuarios', methods=['GET'])
def listar_usuarios():
    pass
