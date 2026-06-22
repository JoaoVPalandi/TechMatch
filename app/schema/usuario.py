from pydantic import BaseModel
from typing import Optional


class UsuarioCadastro(BaseModel):
    nome: str
    email: str
    senha: str
    tipo_conta: str
    area: Optional[str] = None
    tags_competencia: Optional[str] = None

    class Config:
        from_attributes = True

class UsuarioLogin(BaseModel):
    email: str
    senha: str

    class Config:
        from_attributes = True

class UsuarioResposta(BaseModel):
    id: int
    nome: str
    email: str
    tipo_conta: str
    area: Optional[str]
    tags_competencia: Optional[str]

    class Config:
        from_attributes = True
