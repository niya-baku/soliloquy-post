import axios from "axios";

import { apiHost } from "@/constants";

axios.defaults.baseURL = apiHost;
export const httpClient = axios;
