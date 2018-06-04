// axios usage: https://github.com/axios/axios
import axios from 'axios';
import { protocol, baseUrl } from '../../config/env'
import store from '../../store'

export interface HttpOptions {
    headers?: {
        authorization: string
    },
    url?: string,
    data?: any 
}

// const PREFIX = '/api';
const PREFIX = '';
const encFormat = 'application/json';

function api(url: string) {
    return `${protocol}:${baseUrl}${PREFIX}/${url.replace(/^\//, '')}`;
}

function addAuthAndEnc(options: object) {
    let opt = {};
    const defaultOpt = {
        headers: {
            'Content-type': encFormat,
            // 'authorization': store.state.jwtAuth
        }
    }
    // 排除登录
    if(store.state.jwtAuth) {
        defaultOpt.headers['authorization'] = store.state.jwtAuth;
    }
    if (options === undefined || options === null) {
        opt = defaultOpt;
    } else if (!options['headers']){
        opt = {
            ...options,
            ...defaultOpt
        }
    } else {
         opt['headers']['Content-type'] = encFormat;
         if(store.state.jwtAuth) {
             opt['headers']['authorization'] = store.state.jwtAuth;
         }
    }
    return opt;
}

export const HttpService = {
    get(url: string, options?: HttpOptions): Promise<any> {
        return axios.get(api(url), addAuthAndEnc(options));
    },

    post(url: string, data: object, options?: HttpOptions): Promise<any> {
        return axios.post(api(url), data, addAuthAndEnc(options));
    },

    put(url: string, data: object, options?: HttpOptions): Promise<any> {
        return axios.put(api(url), data, addAuthAndEnc(options));
    },

    patch(url: string, data: object, options?: HttpOptions): Promise<any> {
        return axios.patch(api(url), data, addAuthAndEnc(options));
    },

    delete(url: string, options?: HttpOptions): Promise<any> {
        return axios.delete(api(url), addAuthAndEnc(options));
    },

    head(url: string, options?: HttpOptions) : Promise<any> {
        return axios.head(api(url), addAuthAndEnc(options))
    },

    request(options: HttpOptions) : Promise<any> {
        let opt = {...options};
        opt.headers['Content-type'] = encFormat;
        opt.headers['authorization'] = store.state.jwtAuth;
        opt.url = api(options.url);
        return axios.request(opt);
    },


} 