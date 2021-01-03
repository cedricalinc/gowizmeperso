// eslint-disable-next-line
export default function(idAmi = '', action) {
        if(action.type === 'addIdAmi') {
            console.log("ajout ID user dans le store", action.idAmi);
            return action.idAmi;
        } else {
            // console.log("echec ajout ID user dans le store")
            return idAmi;
        }
    }