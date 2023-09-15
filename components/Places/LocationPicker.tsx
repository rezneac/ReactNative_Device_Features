import {Alert, StyleSheet, Text, View} from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';
import {Colors} from '../constants/colors';
import GetLocation from 'react-native-get-location';
import {Image} from 'react-native';
import {useEffect, useState} from 'react';
import {getAddress, getMapPreaview} from '../../util/location';

interface IProps {
  onTakeLocation: (location: object) => void;
}

const LocationPicker = ({onTakeLocation}: IProps) => {
  const [pickedLocation, setPickedLocation] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = getAddress(
          pickedLocation.longitude,
          pickedLocation.latitude,
        );
        onTakeLocation({...pickedLocation, address: address});
      }
    }

    handleLocation();
  }, [pickedLocation, onTakeLocation]);

  async function getLocationHandler() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setPickedLocation({
          longitude: location.longitude,
          latitude: location.latitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  function pickOnMapHandler() {
    Alert.alert('Not available', 'Use the Locate User instead');
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation.longitude !== 0 || pickedLocation.latitude !== 0) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{uri: getMapPreaview(pickedLocation)}}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
