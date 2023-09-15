export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: object;
  id: string;

  constructor(
    title: string,
    imageUri: string,
    location: {address?: string; latitude?: number; longitude?: number},
  ) {
    this.title = title;
    this.imageUri = imageUri;

    if (location.address) {
      this.address = location.address;
    } else {
      this.address = ''; // Provide a default value when 'address' is missing
    }

    this.location = {lat: location.latitude, lng: location.longitude};
    this.id = new Date().toString() + Math.random().toString();
  }
}
