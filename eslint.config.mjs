import { defineConfig } from 'eslint/config';

import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([pluginVue, eslintConfigPrettier]);
