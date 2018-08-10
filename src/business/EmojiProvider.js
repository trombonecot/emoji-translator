
import emojisJSON from "emoji.json";


export default {
    getEmojis() {
        let emojis = {};

        for (let index in emojisJSON) {
          let emoji = emojisJSON[index],
            tags = emoji.keywords.split('|');

       
          //emojis[emoji.name] = emoji.char;
          
          // TODO: names should have priority over tags
          for (let i in tags) {
            const tagName = tags[i].trim();

            if (!emojis[tagName]){
                emojis[tagName] = emoji.char;
            }
          }
        }

        console.log(emojis);

        return emojis;
    }
}