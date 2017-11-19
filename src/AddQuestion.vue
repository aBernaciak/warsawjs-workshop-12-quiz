<template>
  <div id="add-question">
  	<div class="questions-container" v-for="(question, index) in questionsAmount">
	  	<b-form @submit.prevent="onSubmit(index)">
		  	<div class="row mt-3">
		  		<div class="col-md-6 offset-md-3">
						<b-form-input v-model="questions[index].text"
					                  type="text"
					                  placeholder="Dodaj pytanie"
					                  value="pytanie"
					                  required>
		        </b-form-input>
		  		</div>
		  	</div>
		  	<div class="row mt-3">
		  		<div class="col-md-6 mb-2" v-for="(i, index2) in 4">
		  			<b-form-input 	v-model="questions[index].answers[index2]"  
		  											type="text"
		  											:value="index2"
					                  placeholder="Dodaj odpowiedź"
					                  required>
		        </b-form-input>
		  		</div>
		  		<div class="col-md-12 col-mt-3">
		  			<b-form-select 
		  								v-model="questions[index].correctAnswerIndex" 
		  								:options="questions[index].answers" 
		  								class="mb-3"
		  								required>
	    			</b-form-select>
		  		</div>
		  	</div>
		  	<b-button type="submit" class="mb-2" variant="success">Submit</b-button>
	  	</b-form>
  	</div>
  	<div class="btn btn-primary" @click="questionsAmount++, addQuestion()">Dodaj pytanie</div>
	  <router-link to="/" class="btn btn-primary">Wróc do strony głównej</router-link>
  </div>
</template>

<script>
export default {
  name: 'add-question',
  data () {
    return {
    	questions: [],
    	questionsAmount: 1
    }
  },
 	methods: {
    onSubmit(index) {
    	this.questions[index].correctAnswerIndex = this.questions[index].answers.indexOf(this.questions[index].correctAnswerIndex);
      this.$root.quizzes.push({questions: this.questions});
      console.log(this.$root.quizzes)
    },
    addQuestion() {
    	this.questions.push({
    		text: '',
    		answers: new Array(4),
    		correctAnswerIndex: ''
    	})
    }
  },
  created: function() {
  	this.addQuestion();
  }
}
</script>

<style lang="scss">
</style>
