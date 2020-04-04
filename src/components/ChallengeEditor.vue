<template>
  <v-form v-model="fromIsValid">
    <v-container ma-0>
      <v-row>
        <v-col cols="3">
          <v-text-field
            label="Titel"
            id="title"
            outlined
            clearable
            hint="Aussagekräftig, maximal zwei Wörter"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-textarea
            label="Beschreibung"
            textarea
            outlined
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ name: 'ChallengeEditor' })
export default class ChallengeEditor extends Vue {
  public fromIsValid = false;
}
</script>

<style scoped>
</style>
