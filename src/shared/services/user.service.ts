import { HttpService } from  './api.service';
import { Response } from '../model/response'
import { UserInfo } from '../model/user'

/**
 * 用户登录
 * @param username 
 * @param password 
 */
 export const login = (username: string, password: string): Promise<Response<UserInfo>> => {
     return HttpService.post('/login',{
         username: username,
         password: password 
     })
 }

/**
 * 用户登出
 * @param userId 
 */
export const logout = (userId: string): Promise<Response<any>> => {
    return HttpService.post('/logout', {
        userId: userId
    })
}

/**
 * 用户注册
 * @param username 
 * @param password 
 */
export const register = (username: string, password: string): Promise<Response<UserInfo>> => {
    return HttpService.post('/users', {
        username: username,
        password: password
    })
}

/**
 * 获取用户信息
 * @param userId 
 */
export const retrieveUserInfo = (userId: string): Promise<Response<UserInfo>> => {
    return HttpService.get(`/users/${userId}`);
}

/**
 * 修改用户信息
 * @param oldUsername
 * @param userInfo 
 */
export const modifyUserInfo = (userId: string, userInfo: UserInfo): Promise<Response<UserInfo>> => {
    return HttpService.patch(`/users/${userId}`, userInfo);
}

/**
 * 注销用户
 * @param userId 
 * @param username
 * @param password 
 */
export const deleteUser = (userId: string, username: string,password: string): Promise<Response<any>> => {
    return HttpService.delete(`/users/${userId}`, {
        data: {
            username: username,
            password: password
        },
    })
}