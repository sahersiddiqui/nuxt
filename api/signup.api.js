import request from '@/plugins/axios';

export function register(data) {
    return request({
        url: 'user',
        method: 'POST',
        data
    })
}