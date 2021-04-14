import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

//  Require all components in the current directory and sub directories
//
//  The code below searches for   _base-any-words.vue
//
const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {

    //  Get the components configuration
    //
    const componentConfig = requireComponent(fileName);

    const fn = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

    const componentName = upperFirst(camelCase(fn));

    Vue.component(componentName, componentConfig.default || componentConfig);

});
  