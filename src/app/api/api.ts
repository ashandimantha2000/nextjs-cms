import GhostContentAPI from "@tryghost/content-api";
import axios from "axios";
import https from "https";

// Create API instance with site credentials
// export const api = new GhostContentAPI({
//   url: 'https://localhost:2368',
//   key: 'f7c46eb29fea49b966314a242f',
//   version: "v6.0"
// });


//new
// export const api = new GhostContentAPI({
//   url: 'https://localhost',
//   key: '37a973cc1bc7af641c21d8b2f9',
//   version: "v6.0"
// });


export const api = new GhostContentAPI({
  url: 'https://localhost',
  key: '37a973cc1bc7af641c21d8b2f9',
  version: "v6.0",
  makeRequest: ({ url, method, params, headers }) => {
    const fn = axios[method as "get" | "post" | "put" | "delete"] || axios.get;
    return fn(url, {
      params,
      paramsSerializer: (parameters: any) => {
        return Object.keys(parameters).reduce((parts: string[], k: string) => {
          const val = encodeURIComponent(([].concat(parameters[k]) as string[]).join(','));
          return parts.concat(`${k}=${val}`);
        }, []).join('&');
      },
      headers,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
  }
});

//admin api key - 6a57185fdb1915000148334f:65d7b06f3d0325930f1bbf83d0a1021615424c008503194317e655772c1f1b24