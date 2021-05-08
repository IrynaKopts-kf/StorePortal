import { API_URL, X_SYSTEM_CODE } from './const';

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: { ok: any; json: () => any; }) {
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: any,
): Promise<{} | { err: ResponseError }> {
  options = options || {};
  options['headers'] = options['headers'] || {};
  options['headers']['X-System-Code'] = X_SYSTEM_CODE;
  options['headers']['AUTHORIZATION'] = localStorage.getItem('accessToken');
  return fetch(API_URL + url, options)
    .then(checkStatus)
    .catch(async response => {
      const body = await response
        .text()
        .then((errorMessage: string) => JSON.parse(errorMessage));
      const error = new ResponseError(response);
      error.response = body;
      throw error;
    });
}
