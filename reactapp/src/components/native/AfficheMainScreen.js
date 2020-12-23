import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Card,
  Badge,
  BottomSheet,
  ListItem,
} from 'react-native-elements';

import { connect } from 'react-redux';

// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

import Heart from './components/cardEvenement'

import urlLocal from '../urlDevsGoWizMe'

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})


function AfficheMainScreen(props) {

  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [isVisible, setIsVisible] = useState(false);

 

 

  // const [eventsList, setEventsList] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(props.token);

  useEffect(() => {
    const getUserfromStorage = async () => {

        await AsyncStorage.getItem('user', async function (error, data){
            // console.log('Read from Storage: user=', data);
            // console.log('Read from Storage: error=', error);
            if (data){
              // console.log ('AfficheMainScreen data=', data)
                setToken(data);
                props.addToken(data)
            }
        });
    }
    getUserfromStorage ();
  },[])


  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch(`${urlLocal}/pullEvents`)
      const body = await data.json()
      setEventsList(body)
    }
    getEvents()
  }, [])


  useEffect(() => {
    const updateUser = async () => {
        if(props.token){

        const userBD = await fetch(`${urlLocal}/users/getUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })
        const body = await userBD.json();
        // console.log('AfficheMainScreen, updateUser(), user = ', body);
        setUser(body);
        props.onAddIdUser(body._id);
        setCurrentCity(body.ville);
        }else{
          setUser(null)
        }
    }
    updateUser ();
  },[props.token])


  let tokenOK = () => {
    if (props.token) {
      // console.log("TOKEN:", props.token)
      props.navigation.navigate('AfficheSpecialScreen')
    } else {
      // console.log('token absent: user not connected')
      // props.navigation.navigate('AfficheSpecialScreen')
      props.navigation.navigate('SignInScreen')
    }
  }

  var cine = eventsList.map((x,i) => {
    
    if (x.type === 'film') {
      return (
        <Card key={i}
          containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          
          <Heart
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            token={props.token}      
            i={i}
            x={x}
            user={user}
            style={{ position: 'absolute', top: 5, left: 140 }}
            navigation={props.navigation}
          />

          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5, textTransform: 'uppercase' }}>{x.nom}</Text>
          {/* <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text> */}
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var theatre = eventsList.map((x, i) => {
    if (x.type === 'théâtre') {
      return (

        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          <Heart
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            token={props.token}      
            i={i}
            x={x}
            user={user}
            navigation={props.navigation}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{x.nom}</Text>
          {/* <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text> */}
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var expos = eventsList.map((x, i) => {
    if (x.type === 'exposition') {
      return (

        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          <Heart
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            token={props.token}
            i={i}
            x={x}
            user={user}
            navigation={props.navigation}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{x.nom}</Text>
          {/* <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text> */}
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var concert = eventsList.map((x, i) => {
    if (x.type === 'concert') {
      return (

        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          <Heart
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            token={props.token}   
            i={i}
            x={x}
            user={user}
            navigation={props.navigation}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{x.nom}</Text>
          {/* <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text> */}
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  return (
    <View style={{ flex: 1 }}>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

        <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, paddingBottom: 0, marginBottom: 0 }}>
          <Input
            placeholder="CHERCHER"
            inputStyle={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white', marginBottom: 0 }}
          />
          <Button
            type='outline'
            title="Filtres"
            buttonStyle={{ backgroundColor: "#D70026", marginBottom: 0 }}
            titleStyle={{ color: 'white' }}
            onPress={() => {
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
        </View>
{/* 
        <BottomSheet isVisible={isVisible}>
          {FilterList.map((l, i) => (
            <ListItem key={i} containerStyle={{ maxHeight: "100%" }} onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }} onPress={() => console.log(l.title)}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet> */}

        <ScrollView style={{ flex: 2 }}>

          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            CINEMA
            </Text>

          <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {cine}
            </ScrollView>
          </View>


          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            THÉÂTRE
            </Text>

          <View style={{ backgroundColor: '#E55039', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {theatre}
            </ScrollView>
          </View>


          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            EXPOSITIONS & MUSÉES
            </Text>

          <View style={{ backgroundColor: '#F6E58D', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {expos}
            </ScrollView>
          </View>

          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            CONCERT
            </Text>

          <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {concert}
            </ScrollView>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: 'saveToken', token });
    },
    onAddIdEvent: function (idEvent) {
      dispatch({ type: 'addIdEvent', idEvent: idEvent });
    },
    onAddIdUser: function (idUser) {
      dispatch({ type: 'addIdUser', idUser: idUser });
    },
  }
}

function mapStateToProps(state) {
  return {
    token: state.tokenReducer,
    user : state.userReducer,
    currentCity: state.currentCityReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AfficheMainScreen);