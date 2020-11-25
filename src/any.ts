import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Artcle {
    id: number;
    title: String;
    description: string;
  }
  let data: Artcle[] = response.data;
  console.log(data);
});
