from pydantic import BaseModel
from typing import Optional


class VagaCadastro(BaseModel):
    titulo: str
    descricao: str
    area: Optional[str] = None
    tags_exigidas: Optional[str] = None


class VagaResposta(BaseModel):
    id: int
    titulo: str
    descricao: str
    area: Optional[str]
    tags_exigidas: Optional[str]

