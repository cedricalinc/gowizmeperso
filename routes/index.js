var express = require('express');
var router = express.Router();

var userModel = require('../models/users')
var evenementModel = require('../models/events')
var sortieModel = require('../models/sorties')
var friendRequestModel = require('../models/friendRequest')

/* GET home page. */
router.get('/', function (req, res, next) { 
  res.render('../reactapp/src/components/App', { title: 'Express' });
});




//=============================== PARTIE UTILISATEUR ======================================

// Require nécessaires pour les différentes routes
var userModel = require('../models/users')
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var uid2 = require("uid2");

// INSCRIPTION
// TEST POSTMAN : OK
router.post('/sign-up', async function(req,res,next){

  var error = []
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    email: req.body.emailCreation
  })

  console.log("DATA", data)
  //Si un des champs n'est pas rempli, alors erreur 'champs vides'
  if(req.body.prenomCreation == ''
  || req.body.nomCreation == ''
  || req.body.villeCreation == ''
  || req.body.emailCreation == ''
  || req.body.passwordCreation == ''
  ){
    error.push('champs vides')
    // Si la vérification montre qu'un utilisateur est déjà présent, erreur
  } else  if(data != null){
    error.push('utilisateur déjà présent') 
    // Si pas d'erreur, alors on crée l'utilisateur
  } else if(error.length == 0){
    var salt = uid2(32);
    var newUser = new userModel ({
    salt : salt,
    token : uid2(32),
    nom : req.body.nomCreation.toLowerCase(),
    prenom : req.body.prenomCreation.toLowerCase(),
    email : req.body.emailCreation.toLowerCase(),
    mot_de_passe : SHA256(req.body.passwordCreation + salt).toString(encBase64),
    avatar : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    ville : req.body.villeCreation.toLowerCase(),
    amis : [],
    groupes : [],
    conversations : [],
    preferences : [{
      cinema : true,
      theatre: true,
      exposition: true,
      concert: true,
      fantastique: true,
      scienceFiction:  true,
      comedie: true,
      drame: true,
      spectacleMusical: true,
      contemporain: true,
      oneManShow: true,
      musiqueClassique: true,
      musiqueFrancaise: true,
      musiquePop: true,
      musiqueRock: true,
      beauxArts : true,
      histoireCivilisations: true,
  }],
    confidentialite : true,
    favoris : [],
    sorties : []
  });
  
    saveUser = await newUser.save()

    
    if(saveUser){
      result = true
    }
  }

  res.json({result, saveUser, error})
})



// CONNEXION 
// TEST POSTMAN : OK
router.post('/sign-in', async function(req,res,next){

  var result = false
  var user = null
  var error = []
 
  // Si un des deux champs est vide, alors erreur
  if(req.body.emailConnexion == ''
  || req.body.passwordConnexion == ''
  ){
    error.push('champs vides')
  }

  if(error.length == 0){
    var user = await userModel.findOne({ email: req.body.emailConnexion.toLowerCase() });
    // si on ne trouve pas d'user, alors email inconnu
    if (!user){
      error.push('Email inconnu')
    // si on trouve un utilisateur, alors on calcule le hash et on le compare
    } else {
    var hash = SHA256(req.body.passwordConnexion + user.salt).toString(encBase64);
    console.log('user.salt',user.salt)
    console.log("hash", hash)
    console.log("user", user)
    
    if(hash === user.mot_de_passe){
      result = true
    // si erreur de comparaison alors le mot de passe est incorrect
    } else {
      error.push('Mot de passe incorrect')
    }
  }}
  
  res.json({result, user, error})
})


// Récupération des informations d'un utilisateur via son id
// TEST POSTMAN : OK
router.post('/profil', async function (req, res, next) {
  console.log("ID AMI --------------", req.body.id)
  const user = await userModel.findById(req.body.id)
  res.json(user);
});


//==================== PARTIE EVENEMENTS ============================================

// Route pour récupérer l'ensemble des évènements --> SCREEN des évènements
// TEST POSTMAN : OK
router.get('/pullEvents', async function (req, res, next) {
  const events = await evenementModel.find()
  // console.log('route pullEvents', events);
  res.json(events);
});


// Route pour récupérer un évènement spécifiquement --> SCREEN de la carte évènement détaillée
// TEST POSTMAN : OK
router.post('/pullEventDetaille', async function (req, res, next) {
  // console.log("req post id recup", req.body.id)
  const event = await evenementModel.findById(req.body.id)
  res.json(event);
});


// Route pour ajout de like :  ajouter l'id de l'utilisateur à la liste des likes de l'évènement et ajouter l'id du film au tableau de likes de l'utilisateur
// TEST POSTMAN : OK
router.post('/likeEvent', async function (req, res, next) {

  var idEvent = req.body.idEvent;
  var idUser = req.body.idUser;
  console.log("IDEVENT", idEvent)
  console.log("IDUSER", idUser)

  var event;
  var user;

    evenementModel.findOneAndUpdate(
      { _id: idEvent },
      { $push: { popularite: idUser } },
      function (error, success) {
        if (error) {
          console.log("ERROR EVENT", error);
        } else {
          console.log("SUCCESS EVENT", success);
        }
      });

    userModel.findOneAndUpdate(
      { _id: idUser },
      { $push: { favoris: idEvent } },
      function (error, success) {
        if (error) {
          console.log("ERROR USER", error);
        } else {
          console.log("SUCCESS USER", success);
        }
      });
    event = evenementModel.findById(idEvent);
    user = userModel.findById(idUser);

  res.json({ event: event.popularite, user: user.favoris });
});


// Route pour retrait de like :  ajouter l'id de l'utilisateur à la liste des likes de l'évènement et ajouter l'id du film au tableau de likes de l'utilisateur
// TEST POSTMAN : OK
router.post('/unlikeEvent', async function (req, res, next) {

  var idEvent = req.body.idEvent;
  var idUser = req.body.idUser;

  var event;
  var user;

  evenementModel.findOneAndUpdate(
    { _id: idEvent },
    { $pull: { popularite: idUser } },
    function (error, success) {
      if (error) {
        console.log("ERROR EVENT", error);
      } else {
        console.log("SUCCESS EVENT", success);
      }
    });

  userModel.findOneAndUpdate(
    { _id: idUser },
    { $pull: { favoris: idEvent } },
    function (error, success) {
      if (error) {
        console.log("ERROR USER", error);
      } else {
        console.log("SUCCESS USER", success);
      }
    });

  event = evenementModel.findById(idEvent)
  user = userModel.findById(idUser)

  res.json({ event: event.popularite, user: user.favoris });
});
















// =========================== PARTIE SORTIES ==================================================

// ROUTE POUR CREER UNE SORTIE
// TEST POSTMAN : OK
router.post('/addSortie', async function (req, res, next) {
 console.log('=============== CREATION SORTIE ===================')

  var idEvenement;
  // Pour anticiper la création de sortie non liée à un évènement (fonctionnalité initialement désirée, non réalisée suite à revue des plannings de Gantt) et éviter une erreur de non transmission d'ID Event à la création de la sortie
  if (req.body.evenementLie == undefined) {
    idEvenement = 0
  } else {
    idEvenement = req.body.evenementLie
  }

  // Selon le nombre d'invités transmis, 3 cas différents
  // si plusieurs participants
  if (req.body.part != undefined && req.body.part.length > 1) {
    var convives = req.body.part.split(",")

    var newSortie = new sortieModel({
      evenementLie: idEvenement,
      organisateur: req.body.organisateur,
      nomSortie: req.body.nomSortie,
      image: req.body.image,
      adresse: req.body.adresse,
      cp: req.body.cp,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      duree: req.body.duree,
      type: req.body.type,
      participants: convives
    });
    // si un seul participant
  } else if (req.body.part != undefined && req.body.part.length == 1) {
    var convives = req.body.part

    var newSortie = new sortieModel({
      evenementLie: idEvenement,
      organisateur: req.body.organisateur,
      nomSortie: req.body.nomSortie,
      image: req.body.image,
      adresse: req.body.adresse,
      cp: req.body.cp,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      duree: req.body.duree,
      type: req.body.type,
      participants: convives
    });
  } else {
    //si aucun participant
    var newSortie = new sortieModel({
      evenementLie: idEvenement,
      organisateur: req.body.organisateur,
      nomSortie: req.body.nomSortie,
      image: req.body.image,
      adresse: req.body.adresse,
      cp: req.body.cp,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      duree: req.body.duree,
      type: req.body.type,
    });
  }

  var sortie = await newSortie.save();

  // LE CREATEUR EST EGALEMENT UN PARTICIPANT (FACON DE RECHERCHER POUR L'ECRAN PLANIFIER), DONC ON LUI AJOUTE L'ID SORTIE DANS SES SORTIES ET IDEM POUR LES SORTIES, AJOUT DE L'ID CREATEUR
  userModel.findOneAndUpdate(
    { _id: req.body.organisateur },
    { $push: { sorties: sortie._id } },
    function (error, success) {
      if (error) {
        console.log("ERROR EVENT", error);
      } else {
        console.log("SUCCESS USER", success);
      }
    });

  sortieModel.findOneAndUpdate(
    { _id: sortie._id },
    { $push: { participants: req.body.organisateur } },
    function (error, success) {
      if (error) {
        console.log("ERROR EVENT", error);
      } else {
        console.log("SUCCESS PUSH AMIS SORTIE", success);
      }
    }
  );

  // POUR CHAQUE AMI, ON SE CONNECTE A SON PROFIL ET ON LUI AJOUTE L'ID DE LA SORTIE
  if (convives) {
    for (var idAmiSortie of convives) {
      userModel.findOneAndUpdate(
        { _id: idAmiSortie },
        { $push: { sorties: sortie._id } },
        function (error, success) {
          if (error) {
            console.log("ERROR EVENT", error);
          } else {
            console.log("SUCCESS AMIS", success);
          }
        });
    }
  }
  res.json(sortie);
});





// LECTURE D'UNE SORTIE
// TEST POSTMAN : OK
router.post('/pullSortieDetaillee', async function (req, res, next) {
  console.log("req post id recup", req.body.id)
  var sortie = await sortieModel.findById(req.body.id)
  console.log("SORTIE ===============", sortie)
// Récupération de l'ensemble des infos des amis pour affichage 
  var listAmisSortie = [];
  for (var amis of sortie.participants) {
    var donneesAmis = await userModel.findById(amis)
    // console.log("donneesAmis",donneesAmis)
    listAmisSortie.push(donneesAmis)
  }
  // console.log("listAmisSortie ", listAmisSortie)

  res.json({ sortie, listAmisSortie });
});

// Route pour récupérer les sorties et likes des amis pour le profil
// TEST POSTMAN : OK
router.post('/pullAmi', async function (req, res, next) {

   console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ON COMMENCE ICI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

  console.log(req.body.id)
  // const user = await userModel.findById( req.body.id )
  const user = await userModel.findOne({ _id: req.body.id })

  var idUser = user.id
 
  var sorties = []
  var sortiesUser = user.sorties
  console.log("USER SORTIES", user.sorties)
  for (var listSorties of sortiesUser) {
    var sortiesTrans = await sortieModel.findById(listSorties)
    sorties.push(sortiesTrans)
  }
  console.log("<<<<<<<<<<<<<<<<<<<<<mes sorties ",sorties)

  const likes = await evenementModel.find({ popularite: idUser })
  // console.log("mesLikes ", mesLikes)
  res.json({ user, sorties, likes })

});


// Route pour récupérer l'ensemble des informations de l'utilisateur --> SCREEN des évènements
// TEST POSTMAN : OK
router.post('/pullUser', async function (req, res, next) {

  // 1. je récupère l'utilisateur et de cet utilisateur :
  //   2. mes sorties : grâce aux ids sorties stockés dans son profil, je les connecte par un for...of à  la collection sorties pour chercher les infos sorties
  //   3. mes likes : grâce aux ids favoris stockés dans son profil, je les connecte par un for...of à  la collection events pour chercher les infos evenements


  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ON COMMENCE ICI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

  console.log(req.body.id)
  // const user = await userModel.findById( req.body.id )
  const user = await userModel.findOne({ _id: req.body.id })

  var idUser = user.id
  var mesAmis = user.amis

  // mes sorties : OK
  var mesSorties = []
  var sortiesUser = user.sorties
  for (var listSorties of sortiesUser) {
    var sorties = await sortieModel.findById(listSorties)
    mesSorties.push(sorties)
  }
  // console.log("<<<<<<<<<<<<<<<<<<<<<mes sorties ",mesSorties)

  // mes likes (OK)
  const mesLikes = await evenementModel.find({ popularite: idUser })
  // console.log("mesLikes ", mesLikes)



  //   4. sorties des amis : 
  //     4.a : je récupère via les ids des amis leurs ids de sorties, 
  //     4.b : puis recherche par ami pour intégrer dans un tableau d'id les idsorties 
  //     4.c : je dédoublonne les id de sorties
  //     4.d : je fais une recherche pour chaque id dans la collection sortie pour récuperer les infos (dont la liste d'amis contenue): tableau d'objet
  //     4.e : pour savoir ce que je dois envoyer, je filtre sur le type et si en privée, je vérifie si l'id sortie privée fait partie des id sorties de l'utilisateur

  var idDesSorties = []


  for (var listAmis of mesAmis) {
    console.log("listAmis: ", listAmis)
    var listsortiesami = await userModel.findById(listAmis)
    console.log("listsortiesami: ", listsortiesami)
    var listingsorties = listsortiesami.sorties
    console.log("listingsorties: ", listingsorties)
    idDesSorties.push(listingsorties)
  }

  // console.log("idDesSorties: ", idDesSorties)

  var idDesSortiesConcatDoublons = []

  for (var i = 0; i < idDesSorties.length; i++) {
    idDesSortiesConcatDoublons = idDesSortiesConcatDoublons.concat(idDesSorties[i])
  }
  console.log("idDesSortiesConcat: ", typeof (idDesSortiesConcatDoublons))


  // SUPPRESSION DE DOUBLONS
  function cleanArray(array) {
    var i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]] = 0;
    }
    for (j in obj) {
      out.push(j);
    }
    return out;
  }

  var idDesSortiesConcatSansDoublons = cleanArray(idDesSortiesConcatDoublons);
  console.log("idDesSortiesConcatSansDoublons: ", idDesSortiesConcatSansDoublons);

  // RECUP DES INFOS SORTIES
  var sortiesAmis = []
  for (var sorts of idDesSortiesConcatSansDoublons) {
    var sortiesami = await sortieModel.findById(sorts)
    sortiesAmis.push(sortiesami)
  }
  // console.log("sortiesAmis: ", sortiesAmis)

  // VERIF DU TYPE ET S'IL FAUT AFFICHER OU NON A L'UTILISATEUR
  var sortiesAffichees = []

  for (var sortiees of sortiesAmis) {
    // console.log(sortiees.type)
    if (sortiees.type != "privée") {
      // console.log("OPEN SORTIE")
      sortiesAffichees.push(sortiees)
    } else {
      for (var j = 0; j < sortiesUser.length; j++) {
        if (sortiees.id == sortiesUser[j]) {
          console.log("id ami", sortiees.id, "========= id user", sortiesUser[j])
          console.log("privée mais OK")
          sortiesAffichees.push(sortiees)
        } else {
          console.log("SOIREE PRIVEE", "id ami", sortiees.id, "========= id user", sortiesUser[j])
        }
      }
    }
  }

  // console.log("sortiesAffichees", sortiesAffichees)

  //   5. likes des amis : MEME LOGIQUE QUE POUR LA SORTIE

  // RECUPERATION DES ID EVENEMENTS FAVORIS DES AMIS
  var amisLikes = []
  for (var rechamilikes of mesAmis) {
    var transamisLikes = await userModel.findById(rechamilikes)
    // console.log("rechamilikes", rechamilikes)
    // console.log("LIKES FOUND", transamisLikes)
    amisLikes.push(transamisLikes.favoris)
  }
  // console.log("amisLikes ", amisLikes)

  //DEDOUBLONNEMENT
  var idDesLikesConcatDoublons = []

  for (var i = 0; i < amisLikes.length; i++) {
    idDesLikesConcatDoublons = idDesLikesConcatDoublons.concat(amisLikes[i])
  }
  // console.log("idDesSortiesConcat", idDesLikesConcatDoublons)

  var idDesLikesConcatSansDoublons = cleanArray(idDesLikesConcatDoublons);
  // console.log("idDesLikesConcatSansDoublons", idDesLikesConcatSansDoublons);

  //RECHERCHE DES ELEMENTS EVENEMENTS DES IDS DEDOUBLONNES DES AMIS
  var LikesDesAmis = []
  for (var likess of idDesLikesConcatSansDoublons) {
    var likessami = await evenementModel.findById(likess)
    LikesDesAmis.push(likessami)
  }
  // console.log("LikesDesAmis", LikesDesAmis)

  res.json({ user, mesSorties, mesLikes, sortiesAffichees, LikesDesAmis })

});





// Route créée mais non usitée dans l'application et non mise dans la version web pour respecter le périmètre
// Retrait des id dans chacune des collections
// TEST POSTMAN : OK
router.post('/desinscription', async function (req, res, next) {

  var idUser = req.body.idUser
  var idSortie = req.body.idSortie

  userModel.findOneAndUpdate(
    { _id: idUser },
    { $pull: { sorties: idSortie } },
    function (error, success) {
      if (error) {
        console.log("ERROR EVENT", error);
      } else {
        console.log("SUCCESS USER", success);
      }
    });

  sortieModel.findOneAndUpdate(
    { _id: idSortie },
    { $pull: { participants: idUser } },
    function (error, success) {
      if (error) {
        console.log("ERROR EVENT", error);
      } else {
        console.log("SUCCESS PUSH AMIS SORTIE", success);
      }
    }
  );


res.json()

});










// =================================== PARTIE AMIS =======================================================

// RECUPERATION DES AMIS
// TEST POSTMAN : OK
router.post('/pullFriendsList', async function (req, res, next) {
  // console.log("req post id recup", req.body.id)
  const user = await userModel.findById(req.body.id)

  var listAmis = [];
  for (var amis of user.amis) {
    var donneesAmis = await userModel.findById(amis)
    // console.log("donneesAmis",donneesAmis)
    listAmis.push(donneesAmis)
  }
  // console.log("listAmis ", listAmis)

  res.json({ listAmis });
});



// CHERCHER DES AMIS 
// TEST POSTMAN : OK

router.post('/searchFriends', async function (req, res, next) {

  const resultatsRecherche = await userModel.find({ nom: req.body.nom.toLowerCase() })
  res.json(resultatsRecherche);
 
});

// Route creation Demande  amis 
// TEST POSTMAN : OK

router.post('/demandeFriend', async function (req, res, next) {
  
  console.log();
  console.log("INDEX.JS, route: /demandeFriend");
  console.log("req.body.token=", req.body.token);
  console.log("req.body.idAmi=", req.body.idAmi);

  var result = {status : false}
  try{
    var user = await userModel.findOne({token : req.body.token});
    console.log(user);
    const newDemande = new friendRequestModel({
      demandeur: user._id,
      receveur: req.body.idAmi,
      statut: true
    })
  
    result.response = await newDemande.save();
    result.status = true;
  }catch(e){
    result.error = e;
    console.log(e);
  }
  console.log("result=",result);

  res.json(result);

});





// Route recherche les Demandes  d'amis 
// TEST POSTMAN : OK

router.post('/findDemandes', async function (req, res, next) {
  
  var result = {status : false}

   
  var listeDesDemandes = await friendRequestModel.find({receveur : req.body.id})

    var idDeMesDemandeurs=[]
      
    for (var listId of listeDesDemandes) {
      idDeMesDemandeurs.push(listId.demandeur)
    }

    console.log("idDeMesDemandeurs",idDeMesDemandeurs)

    var demandeurs=[]
    for (var futursAmis of idDeMesDemandeurs) {
      var liteDesDemandes = await userModel.findById(futursAmis)
      demandeurs.push(liteDesDemandes)
    }

    console.log("demandeurs",demandeurs)

  res.json(demandeurs);

});


// Route recherche les Demandes  d'amis 
// TEST POSTMAN : OK

router.post('/accepteDemande', async function (req, res, next) {
  var idAmi = req.body.idDemandeur;
  var idUtilisateur = req.body.id;
  console.log("ID AMI --- ", idAmi)
  console.log("ID UTILISATEUR --- ", idUtilisateur)


    userModel.findOneAndUpdate(
      { _id: idUtilisateur },
      { $push: { amis: idAmi } },
      function (error, success) {
        if (error) {
          console.log("ERROR USER", error);
        } else {
          console.log("SUCCESS USER", success);
        }
      });

      userModel.findOneAndUpdate(
        { _id: idAmi },
        { $push: { amis: idUtilisateur } },
        function (error, success) {
          if (error) {
            console.log("ERROR AMI", error);
          } else {
            console.log("SUCCESS AMI", success);
          }
        });

        var remove = await friendRequestModel.deleteOne({receveur : idUtilisateur, demandeur: idAmi })
  
   console.log("ACCEPTATION DEMANDE =====================================")

  res.json({result: true});

});

// Route suppresion une Demande  d'amis 
// TEST POSTMAN : OK
  router.post('/delDemande', async function (req, res, next) {
    var idAmi = req.body.idDemandeur;
    var idUtilisateur = req.body.id;
    console.log("ID AMI --- ", idAmi)
    console.log("ID UTILISATEUR --- ", idUtilisateur)
  
  await friendRequestModel.deleteOne({receveur : idUtilisateur, demandeur: idAmi })
  
  console.log("DELETION DEMANDE =====================================")

 res.json({result: true});

});




























// ---------------------------------------ADMINISTRATION DE LA BDD VIA POSTMAN------------------------------------------
router.post('/addeventPostman', async function (req, res, next) {
  //Ajout d'un évènement avec un créneau 
  var newEvent = new evenementModel({
    nom: req.body.nom,
    type: req.body.type,
    categories: req.body.categorie,
    description: req.body.description,
    image: req.body.img,
    image_public_id: req.body.imgPublicId,
    popularite: req.body.popularite,
    lieux_dates: [{
      salle: req.body.salle,
      adresse: req.body.adresse,
      cp: req.body.cp,
      date_debut: req.body.dateDebut,
      date_fin: req.body.dateFin,
      duree: req.body.duree
    }],

  });

  var event = await newEvent.save();
  res.render('index', { event: event });
});


router.post('/addeventlieuPostman', async function (req, res, next) {
  //Ajout de créneaux à un évènement spécifique via son id
  var idEvenement = '5fce47f76697a656d4d4ea77'
  evenementModel.findOneAndUpdate(
    { _id: idEvenement },
    {
      $push: {
        lieux_dates: {
          salle: req.body.salle,
          adresse: req.body.adresse,
          cp: req.body.cp,
          date_debut: req.body.dateDebut,
          date_fin: req.body.dateFin,
          duree: req.body.duree
        }
      }
    },
    function (error, success) {
      if (error) {
        console.log("ERROR", error);
      } else {
        console.log("SUCCESS", success);
      }
    });

  res.render('index');
});


router.post('/addsortiePostman', async function (req, res, next) {
  //Ajout d'un évènement avec un créneau 
  var newSortie = new sortieModel({
    evenementLie: req.body.evenementLie,
    organisateur: req.body.organisateur,
    nomSortie: req.body.nomSortie,
    adresse: req.body.adresse,
    cp: req.body.cp,
    date_debut: req.body.debut,
    date_fin: req.body.fin,
    duree: req.body.duree,
    type: req.body.type,
    participants: req.body.part

  });

  var sortie = await newSortie.save();
  res.render('index', { sortie });
});



module.exports = router;
