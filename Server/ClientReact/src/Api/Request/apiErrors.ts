export class ApiError {
    constructor(
        public response: Response,
        public code: string,
        public id?: string,
        public payload?: any
    ) {}
}

export const apiErrors = {
    unauthorized: "2",
    notFound: "NFOUND"
};

export function isExpected(ex: any, codes: string[]) {
    return (
        ex instanceof ApiError &&
        codes!.length !== 0 &&
        codes.some(code => ex.code === code)
    );
}