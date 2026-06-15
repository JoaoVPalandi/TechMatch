from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class Vaga(Base):
    __tablename__ = 'vagas'

    id = Column(Integer, primary_key=True, autoincrement=True)
    titulo = Column(String(150), nullable=False)
    descricao = Column(Text, nullable=False)
    area = Column(String(100))
    tags_exigidas = Column(Text)
