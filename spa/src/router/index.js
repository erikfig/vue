import Hello from '../components/HelloWorld.vue'
import AccountList from '../components/Accounts/List.vue'
import AccountView from '../components/Accounts/View.vue'
import AccountCreate from '../components/Accounts/Create.vue'
import AccountEdit from '../components/Accounts/Edit.vue'
import BankList from '../components/Banks/List.vue'
import Login from '../components/Login/Form.vue'
const routes = [

    { path: '/login', component: Login },

    { path: '/', name: 'Hello', component: Hello },
    { path: '/contas', component: AccountList },
    { path: '/contas/novo', component: AccountCreate },
    { path: '/contas/:id', component: AccountView },
    { path: '/contas/:id/editar', component: AccountEdit },

    { path: '/bancos', component: BankList },
];

export default routes;