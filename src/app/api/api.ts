import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'f7c46eb29fea49b966314a242f',
  version: "v6.0"
});
