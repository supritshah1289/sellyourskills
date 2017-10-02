import delay from './delay';

const mehndis =[
  {
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
    title: "Great Mehndi Designs",
    firstName: "James",
    lastName: "Bond",
    price: "$30",
    imageUrl: "http://webneel.com/daily/sites/default/files/images/daily/09-2015/19-mehndi-design-leg.jpg",
    city: "Jersey City",
    state:"NJ",
    zip: "07307",
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




