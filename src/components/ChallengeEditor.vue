<template>
  <v-form
    ref="form"
    v-model="formIsValid"
  >
    <v-container class="ma-0 pb-0">
      <v-row>
        <v-col cols=12>
          <v-card>
            <!-- TEXT -->
            <v-container>
              <v-row>
                <v-col cols="4" class="pb-0">
                  <v-text-field
                    v-model="title"
                    :rules="titleRules"
                    label="Titel"
                    outlined
                    hint="Aussagekräftig, maximal zwei Wörter"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pb-0">
                  <v-textarea
                    v-model="description"
                    :rules="[isRequiredRule]"
                    label="Beschreibung"
                    textarea
                    clearable
                    outlined
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="4" class="pb-0">
                  <v-textarea
                    v-model="storyBefore"
                    :rules="[isRequiredRule]"
                    label="Story davor"
                    textarea
                    clearable
                    outlined
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="4" class="pb-0">
                  <v-textarea
                    v-model="storyAfter"
                    :rules="[isRequiredRule]"
                    label="Story danach"
                    textarea
                    clearable
                    outlined
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="ma-0 py-0">
      <v-row>
        <v-col cols=12>
          <v-card>
            <!-- IMAGES -->
            <v-container>
              <v-row>
                <v-col cols="4" class="pb-0">
                  <v-file-input
                    v-model="icon"
                    :rules="[isRequiredRule]"
                    accept="image/*"
                    label="Hintergrundbild hochladen"
                    append-icon="attach_file"
                    prepend-icon=""
                  ></v-file-input>
                </v-col>
                <v-col cols="4" class="pb-0">
                  <v-file-input
                    v-model="storyBeforeIcon"
                    :rules="[isRequiredRule]"
                    accept="image/*"
                    label="Bild Story davor hochladen"
                    append-icon="attach_file"
                    prepend-icon=""
                  ></v-file-input>
                </v-col>
                <v-col cols="4" class="pb-0">
                  <v-file-input
                    v-model="storyAfterIcon"
                    :rules="[isRequiredRule]"
                    accept="image/*"
                    label="Bild Story danach hochladen"
                    append-icon="attach_file"
                    prepend-icon=""
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-row v-if="!!icon || !!storyBeforeIcon || !!storyAfterIcon">
                <v-col cols="4">
                  <v-img
                    :src="iconPreview"
                    alt="Icon Preview"
                  />
                </v-col>
                <v-col cols="4">
                  <v-img
                    :src="storyBeforeIconPreview"
                    alt="Icon Preview"
                  />
                </v-col>
                <v-col cols="4">
                  <v-img
                    :src="storyAfterIconPreview"
                    alt="Icon Preview"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="ma-0 py-0">
      <v-row>
        <v-col cols=12>
          <v-card>
            <!-- LISTS -->
            <v-container>
              <v-row>
                <v-col cols=4>
                  <editable-list
                    v-model="material"
                    title="Material"
                  />
                </v-col>
                <v-col cols=4>
                  <editable-list
                    v-model="instructions"
                    title="Anleitung"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="ma-0 py-0">
      <v-row>
        <v-col cols=12>
          <v-card>
            <!-- CONTROLS -->
            <v-container>
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
                    Abbrechen
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { convertImgToB64 } from '@/common/utils';
import { Validator } from '@/common/types';
import EditableList from './EditableList.vue';

function isRequiredRule(v: string) {
  return !!v || 'Pflichtfeld';
}

@Component({
  name: 'ChallengeEditor',
  components: { EditableList },
})
export default class ChallengeEditor extends Vue {
  public $refs!: {
    // FIXME: It is acutally a VueComponent
    form: HTMLFormElement;
  }

  /** isRequiredRule() exposed as rule set. */
  public isRequiredRule: Validator = isRequiredRule;

  // #region FORM PROPS
  public formIsValid = false;

  public title = '';

  public titleRules: Validator[] = [
    isRequiredRule,
    (v) => (!!v && v.split(' ').length <= 2) || 'Titel darf maximal 2 Wörter haben',
  ];

  // description and icon
  public description = '';

  public icon: File | null = null;

  private iconPreview = '';

  @Watch('icon', { immediate: false })
  private async onIconChange(file: File | null): Promise<void> {
    if (file) {
      this.iconPreview = await convertImgToB64(file);
    } else {
      this.iconPreview = '';
    }
  }

  // story before and icon
  public storyBefore = '';

  public storyBeforeIcon: File | null = null;

  private storyBeforeIconPreview = '';

  @Watch('storyBeforeIcon', { immediate: false })
  private async onStoryBeforeIconChange(file: File | null): Promise<void> {
    if (file) {
      this.storyBeforeIconPreview = await convertImgToB64(file);
    } else {
      this.storyBeforeIconPreview = '';
    }
  }

  // story after and icon
  public storyAfter = '';

  public storyAfterIcon: File | null = null;

  private storyAfterIconPreview = '';

  @Watch('storyAfterIcon', { immediate: false })
  private async onStoryAfterIconChange(file: File | null): Promise<void> {
    if (file) {
      this.storyAfterIconPreview = await convertImgToB64(file);
    } else {
      this.storyAfterIconPreview = '';
    }
  }

  // material
  public material: string[] = [];

  // instructions
  public instructions: string[] = [];
  // #endregion

  // #region UTILITIES
  public validate() {
    this.$refs.form.validate();
  }

  public reset() {
    this.$refs.form.reset();
    this.instructions = [];
    this.material = [];
  }
  // #endregion
}
</script>
