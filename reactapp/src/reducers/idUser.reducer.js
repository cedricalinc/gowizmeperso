// export default function(idUser = '', action) {
export default function(idUser = '5fdb409fa597eb0f08533c1d', action) {
    if(action.type == 'addIdUser') {
        // console.log("ajout ID user dans le store", action.idUser);
        return action.idUser;
    } else {
        // console.log("echec ajout ID user dans le store")
        return idUser;
    }
}