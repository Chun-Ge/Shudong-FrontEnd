import {
    SET_USERINFO,

} from './mutation-types'
import { UserInfo } from '../shared/model/user';

export default {
    [SET_USERINFO](state, userInfo: UserInfo) {
        state.userInfo = {
            ...state.userInfo,
            ...userInfo
        };
    }
}