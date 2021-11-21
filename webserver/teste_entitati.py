from gestUtiliz.repositories.entitati.persoana import persoana

def test_change():
    asd = persoana("marina", "ioan","asf@", "telefon","adresa")

    asd.changeNume("marin")
    asd.changePrenume("marin")

    assert(asd.getNume == "marin")
    assert(asd.getPrenume == "marin")


test_change()