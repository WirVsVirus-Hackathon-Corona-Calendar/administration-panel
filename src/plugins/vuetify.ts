import Vue from 'vue';
import de from 'vuetify/src/locale/de';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vuetify, {
  VApp,
  VAppBar,
  VBtn,
  VCard,
  VCardTitle,
  VCol,
  VContainer,
  VContent,
  VDataTable,
  VDivider,
  VFooter,
  VForm,
  VFileInput,
  VIcon,
  VImg,
  VList,
  VMenu,
  VNavigationDrawer,
  VRow,
  VSelect,
  VSpacer,
  VTextarea,
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
    VCard,
    VCardTitle,
    VCol,
    VContainer,
    VContent,
    VDataTable,
    VDivider,
    VFileInput,
    VForm,
    VFooter,
    VIcon,
    VImg,
    VList,
    VMenu,
    VNavigationDrawer,
    VRow,
    VSelect,
    VSpacer,
    VTextarea,
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
