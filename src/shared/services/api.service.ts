// axios usage: https://github.com/axios/axios
import axios from 'axios';
import { protocol, baseUrl } from '../../config/env'

export interface HttpOptions {
    headers?: object, 
    url?: string,
    data?: object 
}

// const PREFIX = '/api';
const PREFIX = '';
const encFormat = 'application/json';

function api(url: string) {
    return `${protocol}:${baseUrl}${PREFIX}/${url.replace(/^\//, '')}`;
}

function toJsonType(options: object) {
    let opt = {};
    const defaultOpt = {
        headers: {
            'Content-type': encFormat
        }
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
    }
    return opt;
}

export const HttpService = {
    get(url: string, options?: HttpOptions): Promise<any> {
        return axios.get(url, options);
    },

    post(url: string, data: object, options?: HttpOptions): Promise<any> {
        console.log(api(url));
        return axios.post(api(url), data, toJsonType(options));
    },

    put(url: string, data: object, options?: HttpOptions): Promise<any> {
        return axios.put(api(url), data, toJsonType(options));
    },

    patch(url: string, data: object, options?: HttpOptions): Promise<any> {
        return axios.patch(api(url), data, toJsonType(options));
    },

    delete(url: string, options?: HttpOptions): Promise<any> {
        return axios.delete(api(url), options)
    },

    head(url: string, options?: HttpOptions) : Promise<any> {
        return axios.head(api(url), options)
    },

    request(options: HttpOptions) : Promise<any> {
        let opt = {...options};
        opt.headers['Content-type'] = encFormat;
        opt.url = api(options.url)
        return axios.request(opt);
    },


} 