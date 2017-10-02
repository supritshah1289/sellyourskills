import delay from './delay';

const mehndis =[
  { id: 1,
    title: "Best designs in town",
    firstName: "Priya",
    lastName: "Patel",
    price: "$10",
    imageUrl: "https://i.pinimg.com/736x/c7/6c/41/c76c4153326aa18ca4618b7db7162ba9--hand-henna-henna-art.jpg",
    city: "Piscataway",
    state:"NJ",
    zip: "07307",
    country:"USA"
  },
  {
    id: 10,
    title: "Wedding Henna Designer",
    firstName: "Zinat",
    lastName: "Aman",
    price: "$20",
    imageUrl: "http://www.fashionlady.in/wp-content/uploads/2016/03/2016-punjabi-mehndi.jpg",
    city: "Troy",
    state:"AL",
    zip: "07307",
    country:"USA"
  },
  {
    id: 11,
    title: "Great Mehndi Designs",
    firstName: "James",
    lastName: "Bond",
    price: "$30",
    imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/09-2015/19-mehndi-design-leg.jpg",
    city: "Jersey City",
    state:"NJ",
    zip: "07307",
    country:"USA"
  },
  {
    id: 12,
    title: "Design by Shah",
    firstName: "Suprit",
    lastName: "Shah",
    price: "$300",
    imageUrl: "https://i.ytimg.com/vi/cOPq32pi-Lw/maxresdefault.jpg",
    city: "N. Plainfield",
    state:"NJ",
    zip: "07060",
    country:"USA"
  },
  {
    id: 13,
    title: "Design by Patel",
    firstName: "Suprit",
    lastName: "Shah",
    price: "$300",
    imageUrl: "https://i.ytimg.com/vi/cOPq32pi-Lw/maxresdefault.jpg",
    city: "N. Plainfield",
    state:"NJ",
    zip: "07060",
    country:"USA"
  },
  {
    id: 15,
    title: "Design by Amin",
    firstName: "Suprit",
    lastName: "Shah",
    price: "$300",
    imageUrl: "https://i.ytimg.com/vi/cOPq32pi-Lw/maxresdefault.jpg",
    city: "N. Plainfield",
    state:"NJ",
    zip: "07060",
    country:"USA"
  }

];

class MehndiApi{
    static getAllMehndis() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mehndis));
      }, delay);
    });
  }
}

export default MehndiApi;




