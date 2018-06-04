import {
    SET_USERINFO,
    SET_JWTAUTH,
    SET_TOPBARTEXT,
    TOGGLE_MENU,
    CLEARDATA,

} from './mutation-types'
import { UserInfo } from '../shared/model/user';

export default {
    [SET_USERINFO](state, userInfo: UserInfo) {
        state.userInfo = {
            ...state.userInfo,
            ...userInfo
        };
    },
    [SET_JWTAUTH](state, content: string) {
        state.jwtAuth = content;
    },
    [SET_TOPBARTEXT](state, content: string) {
        state.topbarText = content;
    },
    [TOGGLE_MENU](state) {
        state.hiddenMenu = !state.hiddenMenu;
    },
    [CLEARDATA](state) {
        // let keys = Object.keys(state);
        // keys.forEach((curVal: string) => {
        //     state[curVal] = undefined;
        // })
        state.jwtAuth = '';
        state.hiddenMenu = false;
        state.topbarText = '首页';
        state.userInfo = {};
        state.PULL_LEFT = false;
    },
}