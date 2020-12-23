import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import Heart from './components/cardEvenement'

//Initialisation du store Redux
import { connect } from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'

function AfficheSpecialScreen(props) {

  const [evenement, setEvenement] = useState({})
  const [lieuEvenementSansDoublons, setLieuEvenementSansDoublons] = useState([]);
  const [selectLieuEvenement, setSelectLieuEvenement] = useState('');
  const [dateEvenement, setDateEvenement] = useState([]);
  const [selectDateEvenement, setSelectDateEvenement] = useState('');
  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(null);


  var lieuTransit = [];
  var lieux;
  var uniqueset;
  var backarray;
  var horaireTransit = [];
  var dates;


  useEffect(() => {
    const updateUser = async () => {
      // console.log('AfficheSpecialScreen: useEffect, function updateUser')
      if (props.token) {
        const userBD = await fetch(`${urlLocal}/users/getUser`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `token=${props.token}`
        })
        const body = await userBD.json();
        console.log('AfficheSpecialScreen, updateUser(), user = ', body);
        setToken(props.token);
        setUser(body);

        // setCurrentCity(body.ville);
      }
    }
    updateUser();
  }, [props.token])

  useEffect(() => {
    const findEvent = async () => {
      // console.log("PROPS RECU", props.idEvent)
      setToken(props.token);
      // console.log("AfficheSpecialScreen: props.token = ", props.token)
      const data = await fetch(`${urlLocal}/pullEventDetaille`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'id=' + props.idEvent
      });

      const body = await data.json()
      setEvenement(body);
      console.log(evenement)

      backarray = recupLieu(body);
      setLieuEvenementSansDoublons(backarray);
      createLieuPicker(backarray);
    };
    findEvent();
  }, [])

  useEffect(() => {
    async function horairesEvent() {
      setSelectDateEvenement('');
      horaires()
    };
    horairesEvent();
  }, [selectLieuEvenement])

  function recupLieu(event) {
    // console.log("function 'recupLieu'");
    var backy = [];
    if (event.lieux_dates) {
      // console.log ('evenement.lieux_dates = ', event.lieux_dates)
      for (var i = 0; i < event.lieux_dates.length; i++) {
        lieuTransit.push(event.lieux_dates[i].salle)
      }
      uniqueset = new Set(lieuTransit)
      backy = [...uniqueset];
      // console.log('backy = ', backy);
    }
    return backy;
  }


  var horaires = () => {
    // console.log("coucou from function 'horares'");
    var dateFormat = function (date) {
      var newDate = new Date(date);
      if (newDate.getMinutes()<10) {
        var format = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' - ' + newDate.getHours() + 'h0' + newDate.getMinutes();
      } else {
        var format = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' - ' + newDate.getHours() + 'h' + newDate.getMinutes();
      }
      return format;
    }
    if (evenement.lieux_dates) {
      for (var i = 0; i < evenement.lieux_dates.length; i++) {
        if (selectLieuEvenement.itemValue == evenement.lieux_dates[i].salle) {
          horaireTransit.push(dateFormat(evenement.lieux_dates[i].date_debut));
        }
      }
    }
    // console.log("HORAIRE TRANSIT",horaireTransit);
    setDateEvenement(horaireTransit);
  }

  if (lieuEvenementSansDoublons.length > 0) {
    createLieuPicker(lieuEvenementSansDoublons);
  }

  function createLieuPicker(lieuEvenementSansDoublons) {
    lieux = lieuEvenementSansDoublons.map((lieu, i) => {
      return (
        <Picker.Item
          key={i}
          label={lieu}
          value={lieu}
        />)
    })
  }

  if (dateEvenement.length > 0) {
    dates = dateEvenement.map((date, i) => {
      return (<Picker.Item key={i} label={date} value={date} />)
    });
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          DETAILS DE L'EVENEMENT
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>
        
          <View style={{ flex: 1, alignItems: 'center' }}>

            <View style={{ flex: 1, alignItems: 'center', width: 300, margin: 5 }}>

              <Image style={{ width: 210, height: 297, margin: 5 }} source={{ uri: evenement.image }} />

              <Heart
                size={25}
                style={{ position: 'absolute', top: 10, left: 225 }}
                token={props.token}
                i={0}
                x={evenement}
                user={user}
                navigation={props.navigation}
              />

              <Text style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 18, textTransform: 'uppercase' }}>{evenement.nom}</Text>

              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>{evenement.description}</Text>

              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>Type: {evenement.type}</Text>

              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, maxWidth: '100%' }}>
                Catégories: {evenement.categories}
              </Text>

              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>Durée: {(evenement && evenement.lieux_dates && evenement.lieux_dates.length > 0) ? evenement.lieux_dates[0].duree : ''} minutes</Text>

            </View>

            <View style={{ alignItems: 'center', width: 250, marginTop: 15 }}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>Votre choix de lieu : </Text>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 22, fontWeight: 'bold', color: "#16253D" }}>{selectLieuEvenement.itemValue}</Text>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>Votre choix de séance : </Text>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 22, fontWeight: 'bold', color: "#16253D" }}>{selectDateEvenement.itemValue}</Text>
            </View>

            <View style={{ alignItems: 'center', width: 400, marginBottom: 70 }}>
              <Picker
                selectedValue={lieuTransit}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectLieuEvenement({ itemValue })
                }>
                <Picker.Item label='Lieu(x)' value='Lieux' />
                {lieux}
              </Picker>
            </View>

            <View style={{ alignItems: 'center', width: 400, marginBottom: 150 }}>
              <Picker
                onPress={() => { horaires() }}
                selectedValue={horaireTransit}
                style={{ height: 70, width: 300 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectDateEvenement({ itemValue })
                }>
                <Picker.Item label='Date(s) et horaire(s)' value='2020-12-24T00:00:00.000Z' />
                {dates}
              </Picker>
            </View>

          </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (selectLieuEvenement !== '' && selectDateEvenement !== '') ? "#D70026" : "#16253D",
          }}
          onPress={() => {
            if (selectLieuEvenement !== '' && selectDateEvenement !== '') {
              props.newSortie({
                evenementLie: props.idEvent,
                organisateur: props.idUser,
                nomSortie: evenement.nom,
                image: evenement.image,
                adresse: selectLieuEvenement,
                date_debut: selectDateEvenement,
                duree: evenement.lieux_dates[0].duree
              });
              props.navigation.navigate('PlanOrgaScreen')
            }
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Créer une sortie</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function mapStateToProps(state) {
  return {
    token: state.tokenReducer,
    idUser: state.idUserReducer,
    idEvent: state.idEventReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newSortie: function (obj) {
      dispatch({ type: 'newSortie', newSortie: obj })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AfficheSpecialScreen);
