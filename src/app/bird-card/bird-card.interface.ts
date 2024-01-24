export interface BirdCard {
  birdName: string;
  url: string;
  area: string;
  population: number;
}

export const BirdMock: BirdCard = {
  birdName: 'Upupa',
  url: 'https://ynet-pic1.yit.co.il/picserver5/crop_images/2022/05/02/HJe8VhDTHc/HJe8VhDTHc_0_0_980_653_0_x-large.jpg',
  area: 'Israel',
  population: 100000
}
