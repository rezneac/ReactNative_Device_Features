import axios from 'axios';

interface IProps {
  longitude: number;
  latitude: number;
}

export function getMapPreaview({longitude, latitude}: IProps) {
  const imagePreview = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${longitude},${latitude}&zoom=15.5&marker=lonlat:${longitude},${latitude};color:%23ff0000;size:medium&apiKey=be6344b878e842c187868346413ba25f`;

  return imagePreview;
}

export async function getAddress(longitude: number, latitude: number) {
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=be6344b878e842c187868346413ba25f`,
    );

    const result = response.data.results[0].address_line2;
    return result;
  } catch (error) {
    console.error('Error:', error);
    return error; 
  }
}
