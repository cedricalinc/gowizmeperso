var app = require("../app")
var request = require("supertest")

test("profil", async (done) => {
    await request(app).post("/profil")
    .send({ "id": "5fe874fbc30a2d3bd488e2e9" })
    .expect(200)
    .expect({
        amis: [
          '5feb55f3b6d5ef5704b8d6fd',
          '5fef00ee4facc70dc426d816',
          '5fef228f8fe9a96c88181ade'
        ],
        favoris: [ '5fce4f8cbdb5fec20da3d7ba' ],
        sorties: [
          '5fea16fb9b776665887ce1bb',
          '5fea1721f1970a48a46c4bc1',
          '5fea18ecc09bc959d8bcc4fd',
          '5fea1a726d1f8557f4aa261a',
          '5feb45838638fb1528797315',
          '5feb45d78638fb1528797316',
          '5feb45ec8638fb1528797317',
          '5feb46b7d13be148a43a1808',
          '5feb4727464b471c6000b21f',
          '5feb479c334ae83e004f0626',
          '5fef43b0c8d34e1348fd4a27',
          '5ff04b8938f1951028ae2025',
          '5ff04ea327fcc25ea40683f8',
          '5ff0505c1ef3912e00f8980e',
          '5ff050a8ff71c4782c2bf88d',
          '5ff0512a6fa6e1792cc33516',
          '5ff051aaae8eba47dcaa5998'
        ],
        _id: '5fe874fbc30a2d3bd488e2e9',
        salt: 'tvbiIAxdEL1zrBuuFXtI13pUwgZ7mUDy',
        token: 'BupK3Pxt4rWQkGtbNqwpDBBUOOJ8Pszl',
        nom: 'alinc',
        prenom: 'guillaume',
        email: 'gui@gmail.com',
        mot_de_passe: 'ZY7mlQdjJVQPLgMCpbGzMdGqQ9RVE58lGjeP9Dug9Ec=',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        ville: 'Vitry',
        preferences: [
          {
            _id: '5fe874fbc30a2d3bd488e2ea',
            cinema: true,
            theatre: true,
            exposition: true,
            concert: true,
            fantastique: true,
            scienceFiction: true,
            comedie: true,
            drame: true,
            spectacleMusical: true,
            contemporain: true,
            oneManShow: true,
            musiqueClassique: true,
            musiqueFrancaise: true,
            musiquePop: true,
            musiqueRock: true,
            beauxArts: true,
            histoireCivilisations: true
          }
        ],
        confidentialite: true,
        __v: 0
      })
    
  done()
  })

 test("recuperation d'un evenement", async (done) => {
    await request(app).post("/pullEventDetaille")
    .send({ "id": "5fce449e6697a656d4d4ea5f" })
    .expect(200)
    .expect({   
        categories: [ 'one man show, comédie' ],
        popularite: [ '5fdb409fa597eb0f08533c1d' ],
        _id: '5fce449e6697a656d4d4ea5f',
        nom: 'Paul Taylor : So British ou presque',
        type: 'théâtre',
        description: '"vulez-vu cuché avec moi ce soar ?" est pour vous la seule phrase connue des anglosaxons ? découvrez cet artiste complet ...',
        image: 'https://files.offi.fr/programmation/1689347/images/200/45d33a850a4b6cc774ecf5ce70e23137.jpg',
        lieux_dates: [
          {
            _id: '5fce449e6697a656d4d4ea60',
            salle: 'Le Grand Rex',
            adresse: '1 boulevard Poissonnière',
            cp: '75002',
            date_debut: '2020-12-15T18:00:00.000Z',
            date_fin: '2020-12-15T20:00:00.000Z',
            duree: 120
          },
          {
            _id: '5fce541cfd96c50c340970da',
            salle: 'Le Grand Rex',
            adresse: '1 boulevard Poissonnière',
            cp: '75002',
            date_debut: '2020-12-16T18:00:00.000Z',
            date_fin: '2020-12-16T20:00:00.000Z',
            duree: 120
          },
          {
            _id: '5fce543efd96c50c340970db',
            salle: 'Le Grand Rex',
            adresse: '1 boulevard Poissonnière',
            cp: '75002',
            date_debut: '2020-12-17T18:00:00.000Z',
            date_fin: '2020-12-17T20:00:00.000Z',
            duree: 120
          },
          {
            _id: '5fce5446fd96c50c340970dc',
            salle: 'Le Grand Rex',
            adresse: '1 boulevard Poissonnière',
            cp: '75002',
            date_debut: '2020-12-18T18:00:00.000Z',
            date_fin: '2020-12-18T20:00:00.000Z',
            duree: 120
          },
          {
            _id: '5fce546efd96c50c340970dd',
            salle: 'Le Grand Rex',
            adresse: '1 boulevard Poissonnière',
            cp: '75002',
            date_debut: '2020-12-19T18:00:00.000Z',
            date_fin: '2020-12-19T20:00:00.000Z',
            duree: 120
          }
        ],
        __v: 0
      })
    
  done()
  })

  


