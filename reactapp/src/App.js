import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// CHEMIN VERS LES COMPOSANTS REUTILISES DANS LES DIRECTIONS DU RETURN
import Home from './components/Home';
import Amis from './components/Amis';
import Connexion from './components/Connexion';
import CreaSortie from './components/CreaSortie';
import DetailSortie from './components/DetailSortie';
import Planifier from './components/Planifier';
import Profil from './components/Profil';
import ProfilAmi from './components/ProfilAmi';
import DetailEvenement from './components/DetailEvenement';

// MISE EN PLACE DU REDUX
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import tokenReducer from './reducers/token.reducer';
import idEventReducer from './reducers/idEvent.reducer';
import idSortieReducer from './reducers/idSortie.reducer';
import newSortieReducer from './reducers/newSortie.reducer';
import idUserReducer from './reducers/idUser.reducer';
import idAmiReducer from './reducers/idAmi.reducer';
import userReducer from './reducers/user.reduceur';

const store = createStore(combineReducers({tokenReducer,idEventReducer,idSortieReducer,newSortieReducer,idUserReducer, userReducer,idAmiReducer}));


function App() {
  return (

    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Connexion} path="/connexion" exact />
          <Route component={CreaSortie} path="/creation" exact />
          <Route component={DetailSortie} path="/sortie" exact />
          <Route component={Planifier} path="/planifier" exact />
          <Route component={Profil} path="/profil" exact />
          <Route component={ProfilAmi} path="/profilAmi" exact />
          <Route component={Amis} path="/amis" exact />
          <Route component={DetailEvenement} path="/evenement" exact />

        </Switch>
      </Router>
    </Provider>
    

  );
}

export default App;
