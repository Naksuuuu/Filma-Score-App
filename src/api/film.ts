import { API_CONFIG } from "./config";

class Film {
  private getUrl(endpoint: string, params: Record<string, string | number>): string {
    const searchParams = new URLSearchParams({
      api_key: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData(url: string) {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Tmdb api error" + response.statusText);
    return response.json();
  }

  async getPopularMovie() {
    const url = this.getUrl(`${API_CONFIG.BASE_URL}/movie/popular`, {});

    return this.fetchData(url);
  }

  async getTopRatedMovie() {
    const url = this.getUrl(`${API_CONFIG.BASE_URL}/movie/top_rated`, {});

    return this.fetchData(url);
  }

  async getAllTopRatedMovies(page: number, genreIds?: number[]) {
    const url = this.getUrl(`${API_CONFIG.BASE_URL}/discover/movie`, {
      page: page,
      sort_by: `vote_average.desc`,
      "vote_count.gte": 2000,
      ...(genreIds && genreIds.length > 0 ? { with_genres: genreIds.join(",") } : {}),
    });

    return this.fetchData(url);
  }

  async getAllPopularMovies(page: number, genreIds?: number[]) {
    const url = this.getUrl(`${API_CONFIG.BASE_URL}/discover/movie`, {
      page: page,
      sort_by: `popularity.desc`,
      ...(genreIds && genreIds.length > 0 ? { with_genres: genreIds.join(",") } : {}),
    });

    return this.fetchData(url);
  }

  async getListGenre() {
    const url = this.getUrl(`${API_CONFIG.BASE_URL}/genre/movie/list`, {});

    return this.fetchData(url);
  }
}

export const FilmApi = new Film();
