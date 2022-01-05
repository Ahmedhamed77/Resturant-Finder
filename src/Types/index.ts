export interface UserLocation {
  accuracy?: number;
  altitude: number;
  course?: number;
  latitude: number;
  longitude: number;
  speed: number;
  time: number;
  verticalAccuracy?: number;
}

export interface Resturant {
  id: number;
  name: string;
  resturantlatitude: number;
  resturantlongitude: number;
}
