
import emojisJSON from "emoji.json";

export default {
    getEmojis() {
        let emojis = {};

        for (let index in emojisJSON) {
          let emoji = emojisJSON[index],
            tags = emoji.keywords.split('|');
          
          for (let i in tags) {
            emojis[tags[i].trim()] = emoji.char;
          }
        }

        return emojis;
    }
}