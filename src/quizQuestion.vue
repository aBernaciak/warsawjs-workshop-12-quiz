<template>
	<b-list-group>
  	<b-list-group-item v-for="(question, index) in questionPassed.answers"
                     @click="selectAnswer(index)">
       {{question}}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'quiz-question',
  props: ['questionPassed'],
  data () {
    return {
     
    }
  },
  methods: {
  	selectAnswer(index) {
			this.$emit('selected', index);
  	}
  }
}
</script>

<style lang="scss">
</style>
