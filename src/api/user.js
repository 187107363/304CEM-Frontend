import Vue from 'vue';
class AccountAPI {

    login = (params) => Vue.axios.post('http://localhost:3000/public/login', params);

    register = (params) => Vue.prototype.$axios.post('/public/register', params);

    getUserInfo = (userId) => Vue.axios.get('http://localhost:3000/public/User/Id/' + userId);
    
    getCookies = () => Vue.axios.get('http://localhost:3000/public/cookies/');

    destoryCookies = (params) => Vue.axios.delete('http://localhost:3000/public/cookies', params);
}

export default new AccountAPI();