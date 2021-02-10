import Vue from 'vue';
import App from './App';

new Vue({
    // el: '#app',      executa a mesma função do .$mount('app')
    // render(createElement){                Executa a mesma
    //     return createElement(App);        função da arrow function
    // }                                     acima

    render: h => h(App)

}).$mount('#app')