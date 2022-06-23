import { Injectable} from '@angular/core';
import axios from 'axios';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async signup(data: any) {

    axios.post('http://localhost:4000/api/v1/users/create', data)
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return error;
      })

  }
}