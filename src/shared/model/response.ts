export interface Response<T> {
    data: {
        msg: string,
        data: T
    },
    status: number,
    statusText: string,
    headers: object,
    config: object,
    request: object 
}