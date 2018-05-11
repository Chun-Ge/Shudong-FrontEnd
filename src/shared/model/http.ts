export interface HttpOptions {
    // 提个醒，HTTP Header的key，除了Method都是不区分大小写的
    headers: object, 
    data?: object,
}