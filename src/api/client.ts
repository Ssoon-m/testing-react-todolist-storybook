import axios, { AxiosError } from 'axios';
import { postRefreshToken } from './auth';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

console.log('hi');

client.interceptors.request.use((config) => {
  console.log('config', config);
  return config;
});
client.interceptors.response.use(
  (config) => {
    return config;
  },
  // async (error: AxiosError<any>) => {
  //   const data = await postRefreshToken();
  //   console.log('data', data);
  //   return Promise.reject(error);
  // },
);

export default client;

// 브라우저에 쿠키 세팅
// 브라우저를 닫은 후 다음 로그인때 쿠키가.... 없는데?
// 요청헤더의 cookie는 httponly여도 접근이 가능한가?
