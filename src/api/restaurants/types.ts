export type GetRestaurants = {
  Total_Restaurants: number;
  Result: Restaurant[];
};

export type Restaurant = {
  reviews: number;
  parkinglot: boolean;
  location: string;
  phone: string;
  averagecost: number;
  image: string;
  imageId: string;
  restauranttype: string;
  _id: string;
  businessname: string;
  address: string;
  menu: string;
  slug: string;
  email: string;
  foodMenu: [];
  id: string;
};
