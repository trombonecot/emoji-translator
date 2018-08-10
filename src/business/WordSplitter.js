export default {
    getWords(message){
        let words = [];

        if ( message.length > 0 ){
            // TODO avoid problemns with puntuation
           words = message.split(" ")
        } 

        return words;
    }

}