<template>
  <v-app>
    <!-- HEADER -->
    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-btn v-for="({ title, route }, index) of routes" :key="index"
        :to= "route"
        large
        text
        tile
        depressed
        height="100%"
        class="my-0 py-0"
        >{{ title }}</v-btn>
      <v-spacer />
      <v-toolbar-title>Administration Inf und Firus</v-toolbar-title>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- CONTENT -->
    <v-content>
      <v-container fluid>
        <!-- INJECTION OF THE VIEW -->
        <Router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface Route {
  title: string;
  route: string;
}

@Component({ name: 'App' })
export default class App extends Vue {
  public readonly routes: Route[] = [
    { title: 'Liste', route: '/' },
    { title: 'Anlegen', route: '/create' },
  ];
}
</script>
