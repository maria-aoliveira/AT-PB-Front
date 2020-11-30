import VueRouter from 'vue-router';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Favoritos from './components/Favoritos';
import Hospitais from './components/Hospitais';
import Delegacias from './components/Delegacias';
import OndeComer from './components/OndeComer';
import OndeDormir from './components/OndeDormir';
import Eventos from './components/Eventos';
import Praias from './components/Praias';
import Banheiros from './components/Banheiros';
import PontosTuristicos from './components/PontosTuristicos';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ResultadoPesquisa from './components/ResultadoPesquisa';
import NotFound from './components/NotFound';

 
// export default new VueRouter({
const router = new VueRouter({

    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/galeria',
            name: 'galeria',
            component: Gallery
        },
        {
            path: '/hospitais',
            name: 'hospitais',
            component: Hospitais
        },

        {
            path: '/delegacias',
            name: 'delegacias',
            component: Delegacias
        },
        {
            path: '/onde-comer',
            name: 'onde-comer',
            component: OndeComer
        },
        {
            path: '/onde-dormir',
            name: '/onde-dormir',
            component: OndeDormir
        },
        {
            path: '/praias',
            name: 'praias',
            component: Praias
        },
        {
            path: '/eventos',
            name: 'eventos',
            component: Eventos
        },
        {
            path: '/banheiros',
            name: 'banheiros',
            component: Banheiros
        },
        {
            path: '/pontos-turisticos',
            name: 'pontos-turisticos',
            component: PontosTuristicos
        },
        {
            path: '/resultado',
            name: 'resultado',
            component: ResultadoPesquisa
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/favoritos',
            component: Favoritos,
            meta:{
                precisaAutenticacao: true
            }
        },
        {
            path :'*',
            component: NotFound
        }
    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
          return {selector: to.hash,behavior: 'smooth'}
        } else {
          return {x: 0, y: 0}
          
        }
      },
});

router.beforeEach( 
    (to, from, next) => {
        let routerAuthCheck = false
        if (to.matched.some(record => record.meta.precisaAutenticacao)){
            if (routerAuthCheck){
                next()
            }else{
                router.replace('/login')
            }
        }else{
            next();
    }
})



export default router;
