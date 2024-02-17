import { enviroment } from '../enviroments/enviroment';
import axios from 'axios';

export class InformationDetailService {
  getGenres() {
    const data = axios
      .get(`${enviroment.Api}genre/movie/list?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US`)
      .then((res) => {
        return res.data.genres;
      });

    return data;
  }
}
