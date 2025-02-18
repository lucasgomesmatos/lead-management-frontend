import axios from 'axios';
import { environment } from './env';

export const api = axios.create({
  baseURL: environment.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
