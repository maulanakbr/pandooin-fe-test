import axios from 'axios';

export const END_POINTS = {
  itinerary: 'itinerary?highlight=true',
  article: 'article',
} as const;

type EndPointType = typeof END_POINTS;

type EndPointKey = keyof EndPointType;

type EndPointValues = EndPointType[EndPointKey];

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axios.interceptors.response.use((response) => response.data);

export async function getAxios<T>(endpoint: EndPointValues) {
  const response = await api.get<{ data: T }>(`${endpoint}`);
  return response.data;
}
