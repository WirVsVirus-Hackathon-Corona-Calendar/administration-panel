<template>
  <v-card flat>
    <v-card-text class="px-0 pb-1">
      <p class="body-1 mb-0">{{ title || 'Title' }}</p>
    </v-card-text>
    <v-card-text class="px-0">
      <v-list>
        <v-subheader class="px-0">
          <v-text-field
            ref="input"
            v-model="item"
            label="Item hinzufügen"
            outlined
            :rules="itemRules"
            :append-icon="item.length > 0 ? 'add' : ''"
            :validate-on-blur="true"
            @click:append="addItem(item)"
            @keyup.enter="addItem(item)"
          ></v-text-field>
        </v-subheader>
          <v-list-item
            v-for="(item, index) of items"
            :key="index"
            class="pr-0"
          >
            <v-list-item-content class="py-0">
              <v-list-item-title>{{index + 1}}. {{item}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="my-0">
              <v-btn
                icon
                @click.prevent="deleteItem(index)"
              >
                <v-icon color="grey lighten-1">delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Validator } from '@/common/types';

@Component({ name: 'EditableList' })
export default class EditableList extends Vue {
  public $refs!: {
    input: HTMLFormElement;
  }

  @Prop(String) readonly title!: string;

  @Prop(Array) readonly value!: string[];

  public item = '';

  public itemRules: Validator[] = [
    () => this.items.length > 0 || 'Pflichtfeld',
  ]

  private get items() {
    return [...this.value];
  }

  private set items(items) {
    this.$emit('input', items);
  }

  public created(): void {
    if (!this.value) {
      console.error('EditableList: you should use v-model.');
      return;
    }

    const foundOtherType = this.value.find((el) => typeof el !== 'string');
    if (this.value.length > 0 && foundOtherType) {
      console.error(`EditableList: v-model as to be string[], found ${typeof foundOtherType}.`);
    }
  }

  public addItem(item: string): void {
    if (this.item.length > 0) {
      // this.items = [...this.items, item];
      this.items = [...this.items, item];
      this.item = '';

      this.validate();
    }
  }

  public deleteItem(index: number): void {
    this.items = this.items.filter((item, i) => i !== index);

    this.validate();
  }

  private validate(): void {
    this.$nextTick(() => {
      this.$refs.input.validate();
    });
  }
}
</script>
