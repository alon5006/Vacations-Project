export type ApiResponse<T> = {
    err: string | null,
    content: T | null
}