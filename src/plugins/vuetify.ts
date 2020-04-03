import Vue from 'vue';
import de from 'vuetify/src/locale/de';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vuetify, {
  VApp,
  VAppBar,
  VBtn,
  VCol,
  VContainer,
  VContent,
  VDataTable,
  VDivider,
  VFooter,
  VFileInput,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VRow,
  VSelect,
  VSpacer,
  VTextField,
  VToolbar,
  VToolbarTitle,
  VTooltip,
  Ripple,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VBtn,
    VCol,
    VContainer,
    VContent,
    VDataTable,
    VDivider,
    VFileInput,
    VFooter,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VRow,
    VSelect,
    VSpacer,
    VTextField,
    VToolbar,
    VToolbarTitle,
    VTooltip,
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify({
  lang: {
    locales: { de },
    current: 'de',
  },
  icons: {
    iconfont: 'md',
  },
});
