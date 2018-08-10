
import emojiProvider from '@/business/EmojiProvider.js';
import wordSplitter from '@/business/WordSplitter.js';

export default {
    translate( message ) {
      let words = wordSplitter.getWords(message),
        phrase = "";

      let emojis = emojiProvider.getEmojis();

      for (let index in words) {
        let word = words[index];
        if (!!emojis[word]) {
          phrase += emojis[word];
        } else {
          phrase += word;
        }
        phrase += " ";
      }

      return phrase;
    }
}