import axios from 'axios';
import { enviroment } from '../enviroments/enviroment';

export class TrendingService {
  async getListMovie(pageIndex) {
    const data = await axios
      .get(`${enviroment.Api}trending/movie/day?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267`)
      .then((res) => {
        return res.data;
      });

    return data;
  }
}
