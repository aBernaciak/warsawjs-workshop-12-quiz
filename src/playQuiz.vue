<template>
  <div id="playquiz">
    <b-alert show variant="primary" v-if="messageInfo">{{messageInfo}}</b-alert>
    <div v-if="!stillPlaying">
      <b-alert show variant="success">Wygrana</b-alert>
      <button class="btn-primary" @click="startAgain">Jeszcze raz?</button>
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
                        v-on:selected="selectAnswer"
                        >
          </QuizQuestion>
        </div>
      </div>
    </div>
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
      messageInfo: '',
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
        this.messageInfo = "Dobra odpowiedź."
        this.progress();
      }
      else {
        this.messageInfo = "Zła odpowiedź. Wracamy do początku.";
        this.currentIndex = 0;
        this.questions = this.random(this.questionsInitial[this.currentIndex].questions);
      }
    },
    progress() {
      if(this.currentIndex == 2) {
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
  .list-group-item {
    cursor: pointer;
    &:hover {
      background: #007bff;
      color: #fff;
    }
  }
</style>
