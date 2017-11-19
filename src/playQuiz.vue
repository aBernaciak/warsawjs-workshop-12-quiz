<template>
  <div id="playquiz">
    <b-alert show :variant="messageInfo.variant" v-if="messageInfo">{{messageInfo.text}}</b-alert>
    <div v-if="!stillPlaying">
      <b-alert show variant="success">Wygrana</b-alert>
      <button class="btn btn-primary" @click="startAgain">Jeszcze raz?</button>
    </div>
    <div v-else>
      <h3>{{questions.text}}</h3>
      <div class="row">
        <div class="col-md-4">
          <b-list-group >
            <b-list-group-item v-for="(item, index) in questionsInitial" :active="currentIndex == index">
              Pytanie nr {{index + 1}}
            </b-list-group-item>
          </b-list-group> 
        </div>
        <div class="col-md-8">
          <QuizQuestion :questionPassed="questions" 
                        v-on:selected="selectAnswer">
          </QuizQuestion>
        </div>
      </div>
    </div>
    <router-link to="/" class="btn btn-primary">Wróc do strony głównej</router-link>
  </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
export default {
  name: 'playquiz',
  components: { 
    QuizQuestion, 
  },
  data () {
    return {
      questionsInitial: [],
      questions: [],
      currentIndex: 0,
      messageInfo: {text: '', variant: ''},
      stillPlaying: true,
    }
  },
  methods: {
    random(array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    startAgain() {
      this.stillPlaying = true;
      this.currentIndex = 0;
      this.questions = this.random(this.questionsInitial[this.currentIndex].questions);
    },
    selectAnswer(index) {
      if(this.questions.correctAnswerIndex === index) {
        this.messageInfo.text = "Dobra odpowiedź.";
        this.messageInfo.variant = "success";
        this.progress();
      }
      else {
        this.messageInfo.text = "Zła odpowiedź. Wracamy do początku.";
        this.messageInfo.variant = "danger";
        this.currentIndex = 0;
        this.questions = this.random(this.questionsInitial[this.currentIndex].questions);
      }
    },
    progress() {
      if(this.currentIndex == (this.questionsInitial.length) - 1) {
        this.stillPlaying = false;
      }
      else {
        this.currentIndex ++;
        this.questions = this.random(this.questionsInitial[this.currentIndex].questions);
      }
    }
  },
  created: function() {
    this.questionsInitial = this.$root.quizzes;
    this.questions = this.$root.quizzes[0].questions;
    this.questions = this.random(this.questions);
  }
}
</script>

<style lang="scss">

</style>
