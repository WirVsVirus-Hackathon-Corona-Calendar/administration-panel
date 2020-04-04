<template>
  <div>
    <h2>Neue Challenge anlegen</h2>
    <challenge-editor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ChallengeEditor } from '@/components';

@Component({
  name: 'CreateChallenge',
  components: { ChallengeEditor },
})
export default class CreateChallenge extends Vue {

}
</script>
