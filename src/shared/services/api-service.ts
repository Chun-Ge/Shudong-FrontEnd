import axios from 'axios';
// import { HttpOptions } from '../model/http'
import { baseUrl } from '../../config/env'

export interface HttpOptions {
    headers: object, 
    data?: object
}

// const PREFIX = '/api';
const PREFIX = '';

function api(url: string) {
    return `${PREFIX}/${url.replace(/^\//, '')}`;
}

export const http = {
    get(url: string, options?: HttpOptions) {
        axios.get
    }
} 