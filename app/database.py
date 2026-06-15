from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase

engine = create_engine('sqlite:///techmatch.db')

class Base(DeclarativeBase):
    pass
