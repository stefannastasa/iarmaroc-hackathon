from .user import user

class producator(user):
    
    def __init__(self, idu, username, parola, nume, prenume, email, telefon, adresa):
        super().__init__(idu, username, parola, nume, prenume, email, telefon, adresa)


