<template>
  <div class="hello">
    <h1>Emoji translator</h1>
    <p>
      Translate your favourite phrase into fun emojis!
    </p>
    <input type="text" v-model="message" placeholder="you phrase here">
    <div>
      <span class="translation"> {{translatedByEmojis}}</span>
    </div>
  </div>
</template>

<script>

import emojiTranslator from '@/business/EmojiTranslator.js';

export default {
  name: 'Translator',
  data() {
    return {
      emojiTranslator,
      message: ""
    };
  },

  computed: {
    translatedByEmojis() {
      return this.emojiTranslator.translate(this.message);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.translation {
    font-weight: 400;
    font-family: apple color emoji,segoe ui emoji,notocoloremoji,segoe ui symbol,android emoji,emojisymbols,emojione mozilla;
}
</style>
