from flask import Blueprint, request, jsonify, render_template, redirect, url_for
from app.database import get_db
from app.models.vagas import Vagas
from app.schema.vagas import VagaCadastro, VagaResposta

vagas_bp = Blueprint('vagas', __name__)


@vagas_bp.route('/dashboard', methods=['GET'])
def dashboard():
    return render_template('dashboard_emp.html')


@vagas_bp.route('/vagas', methods=['GET'])
def vagas_page():
    return render_template('vagas.html')


@vagas_bp.route('/vagas', methods=['POST'])
def criar_vaga():
    pass


@vagas_bp.route('/vagas/lista', methods=['GET'])
def listar_vagas():
    pass


@vagas_bp.route('/vagas/<int:vaga_id>', methods=['DELETE'])
def deletar_vaga(vaga_id):
    pass
