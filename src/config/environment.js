/**
 * Environment by Luis Solorzano.
 */
import {develop, production} from "./config";

export const dev_mode = true;
export const live_api = false;

let api;
if (live_api) {
	api = production;
}
else if (dev_mode) {
	api = develop;
}

export const server_api = api;
