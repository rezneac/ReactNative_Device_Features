class Place {
  title: string;
  imageUri: string;
  address: string;
  location: object;
  id: string;
  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: object,
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat:0.12, lng:12}
    this.id = new Date().toString + Math.random().toString();
  }
}
