import { def } from '@vue/shared'
import {createStore} from  'vuex'

import user from '../store/user'


const store =createStore({
    modules:{
        user,
    }
})

export default store