import { ApiError } from "./apiErrors";
import { apiConstants } from "./apiConstants";

export interface RequestOptions {
    body?: any;
}

export const httpGet = async <Data extends {}>(
    url: string,
    options?: RequestOptions
) => {
    return await request<Data>(url, "GET", options);
};

export const httpPost = async <Data extends {}>(
    url: string,
    options?: RequestOptions
) => {
    return await request<Data>(url, "POST", options);
};

export const httpPut = async <Data extends {}>(
    url: string,
    options?: RequestOptions
) => {
    return await request<Data>(url, "PUT", options);
};

export const httpDelete = async (url: string, options?: RequestOptions) => {
    await request(url, "DELETE", options);
};

export const getAsFormData = (params: { file: File; requestData: any }) => {
    const formData = new FormData();
    if (params.file) {
        formData.append("file", params.file);
    }
    formData.append("requestData", JSON.stringify(params.requestData));
    return formData;
};

const request = async <Data extends {}>(
    url: string,
    method: "GET" | "POST" | "DELETE" | "PUT",
    options?: RequestOptions
) => {
    try {
        url = apiConstants.baseUrl.concat(url);
        const response = await fetch(url, {
            body: getBody(options),
            headers: {
                Accept: apiConstants.contentTypes.json,
                ...getContentTypeHeader(options)
            },
            method
        });
        const responseValue = handleResponse<Data>(response);
        return responseValue;
    } catch (error) {
        throw error;
    }
};

const getBody = (options?: RequestOptions) => {
    if (!options) {
        return undefined;
    }
    if (
        options.body === null ||
        typeof options.body !== "object" ||
        options.body instanceof FormData
    ) {
        return options.body;
    }
    return JSON.stringify(options.body);
};

const getContentTypeHeader = (
    options?: RequestOptions
): { "Content-Type": string } | {} => {
    if (options === null || options === undefined) {
        return { "Content-Type": apiConstants.contentTypes.plainText };
    }
    if (options.body instanceof FormData) {
        return {};
    }
    return {
        "Content-Type":
            typeof options.body === "object"
                ? apiConstants.contentTypes.json
                : apiConstants.contentTypes.plainText
    };
};

const handleResponse = async <T extends {}>(response: Response): Promise<T> => {
    if (!response.ok) {
         processFailedResponse(response);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
};

const processFailedResponse = (response: Response) => {
    const errorCode = response.headers.get(
        apiConstants.headers.errorCode
    ) as string;
    const errorId = response.headers.get(
        apiConstants.headers.errorId
    ) as string;
    const payloadError = response.headers.get(
        apiConstants.headers.payloadError
    );

    throw new ApiError(
        response,
        errorCode,
        errorId,
        payloadError ? JSON.parse(payloadError) : {}
    );
};