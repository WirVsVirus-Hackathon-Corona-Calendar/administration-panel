<template>
  <v-form
    ref="form"
    v-model="formIsValid"
  >
    <v-container ma-0>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Titel"
            outlined
            clearable
            hint="Aussagekräftig, maximal zwei Wörter"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-textarea
            v-model="description"
            :rules="isRequired"
            label="Beschreibung"
            textarea
            outlined
            required
          ></v-textarea>
        </v-col>
        <v-col cols="4">
          <v-textarea
            v-model="storyBefore"
            :rules="isRequired"
            label="Story davor"
            textarea
            outlined
            required
          ></v-textarea>
        </v-col>
        <v-col cols="4">
          <v-textarea
            v-model="storyAfter"
            :rules="isRequired"
            label="Story danach"
            textarea
            outlined
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-file-input
            ref="img"
            accept="image/*"
            multiple label="Bild hochladen"
            append-icon="attach_file"
            prepend-icon=""
            @change="fileUpload($event, 'icon')"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            :disabled="!formIsValid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Speichern
          </v-btn>
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { convertImgToB64 } from '@/utils';

type Validator = (v: string) => boolean | string;

function isRequired(v: string) {
  return !!v || 'Pflichtfeld';
}

@Component({ name: 'ChallengeEditor' })
export default class ChallengeEditor extends Vue {
  public formIsValid = false;

  /** isRequired() exposed as rule set. */
  public isRequired: Validator[] = [isRequired]

  public title = '';

  public titleRules: Validator[] = [
    isRequired,
    (v) => (v.split(' ').length <= 2) || 'Titel darf maximal 2 Wörter haben',
  ];

  public description = '';

  private icon = '';

  public storyBefore = '';

  public storyAfter = '';


  public validate() {
    (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }

  public reset() {
    (this.$refs.form as Vue & { reset: () => void }).reset();
  }

  public async fileUpload(event: File[], target: string) {
    const [file] = event;

    switch (target) {
      case 'icon': this.icon = await convertImgToB64(file);

        break;
      default:
    }
  }
}
</script>

<style scoped>
</style>
