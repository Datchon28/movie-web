import axios from 'axios';
import { enviroment } from '../enviroments/enviroment';

export class UpcomingService {
  async getListMovie(pageIndex) {
    const data = await axios
      .get(`${enviroment.Api}movie/upcoming?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=${pageIndex}`)
      .then((res) => {
        return res.data;
      });

    return data;
  }
}
