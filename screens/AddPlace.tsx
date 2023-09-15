import {NavigationProp} from '@react-navigation/native';
import PlaceForm from '../components/Places/PlaceForm';
import {Place} from '../models/place';

interface IProps {
  navigation: NavigationProp<any>;
}

const AddPlaces = ({navigation}: IProps) => {
  function createPlaceHandler(place: Place) {
    navigation.navigate('AllPlaces', {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlaces;
