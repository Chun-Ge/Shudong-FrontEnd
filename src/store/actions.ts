import { SET_USERINFO } from './mutation-types';
import { getUserInfo as getUser } from '../shared/services/user.service';

export default {
    async getUserInfo({
		commit,
		state
	}, username: string) {
		let res = await getUser(username);
		commit(SET_USERINFO, res);
	},
}