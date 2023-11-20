import { useMemberStore } from '@/stores';

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net';

// 添加拦截器
const interceptor = {
    // 拦截前触发
    invoke(options) {
        // 非 http 开头需拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url;
        }
        // 请求超时
        options.timeout = 10000;
        // 添加小程序端请求头标识
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        };
        // 4. 添加 token 请求头标识
        const memberStore = useMemberStore();
        const token = memberStore.profile?.token;
        if (token) {
            options.header.Authorization = token;
        }
    },
};

// 拦截的uni请求类型
uni.addInterceptor('request', interceptor);
uni.addInterceptor('uploadFile', interceptor);

export const request = (options) => {
    return uni.request({
        ...options,
    })
        .then(() => {

        });
};