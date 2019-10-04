const store = require("./store");

function addMessage(user, message) {

    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error("[messageController] Los datos son incorrectos.")
            reject("Los datos son incorrectos")
            return
        }
        const fullMessage = {
            user : user,
            message : message,
            date : new Date(),
        }
        console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    });

    
}

function getMessages(){
    return new Promise((resolve, reject) =>{
        resolve(store.list());
    });
}

function getOneMessage(){
    return new Promise((resolve, reject) =>{
        resolve(store.list());
    });
}


module.exports = {
    addMessage,
    getMessages,
    getOneMessage,
};
