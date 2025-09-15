import { API_CONFIG } from "./config";

class Film {
  getUrl(endpoint: string, params: Record<string, string | number>): string {
    const searchParams = new URLSearchParams({
      apikey: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams}`;
  }
}

export const FilmApi = new Film();
