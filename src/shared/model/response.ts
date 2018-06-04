export interface Response<T> {
    data: {
        msg: string,
        data: T
    },
    status: number,
    statusText: string,
    headers: any,
    config: any,
    request: any
}