<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="challenges"
        :search="search"
        :item-key="challenges.order"
        sort-by="order"
        multi-sort
        class="elevation-1"
        :loading="loading"
        loading-text="Loading... Please wait"
        show-expand
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            delete
          </v-icon>
        </template>

        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-img
              :src="item.iconUrl"
              max-height="200"
              max-width="200"
            ></v-img>
          </td>
        </template>

        <template v-slot:item.body="{ item, value }">
          <span
            class="d-inline-block text-truncate"
            style="max-width: 300px;"
          >
            {{ value }}
          </span>
        </template>
      </v-data-table>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { DataTableHeader } from 'vuetify';
import { Challenge, ChallengesService } from '@/common';

@Component({ name: 'ListChallenges' })
export default class ListChallenges extends Vue {
  public loading = false;

  public search = '';

  public headers: DataTableHeader[] = [
    {
      text: 'Nr', align: 'start', sortable: true, value: 'order', width: '100',
    },
    {
      text: 'Titel', align: 'start', sortable: true, value: 'title',
    },
    {
      text: 'Body', align: 'start', sortable: true, value: 'body',
    },
    {
      text: 'Actions', value: 'actions', sortable: false, width: '100',
    },
  ];

  public challenges: Challenge[] = [];

  private created() {
    this.loadChallenges();
  }

  // #region UTITLITES
  private async loadChallenges() {
    this.loading = true;

    this.challenges = await ChallengesService.loadChallenges();

    this.loading = false;
  }
  // #endregion
}
</script>
