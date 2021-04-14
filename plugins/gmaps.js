import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCYcUq9yGtdyEkfn_Wc9n2leT-cazYDHFM',
        libraries: 'places'
    }
  });