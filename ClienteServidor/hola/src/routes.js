import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Formulario.vue'
import Tabla from './components/Tabla.vue'
import Actualizar from './components/Actualizar.vue'



Vue.use(VueRouter)


//crea las rutas para los componentes
const router = new VueRouter ({
    mode: 'history',
    routes : [
        

        {
            path: "/",
             component: Formulario
        },
        

        { 
            path: "/backups",
            component: Tabla 
        },
        {
            path:"/actualizar-backup/",
            component: Actualizar
        }
       

    ]

})

export default router  