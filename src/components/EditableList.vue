<template>
  <div>
    <span>Hello from EditableList </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({ name: 'EditableList' })
export default class EditableList extends Vue {
  @Prop(Array) readonly value: string[] | undefined;

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
}
</script>
