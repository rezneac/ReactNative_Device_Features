import {useState} from 'react';
import {Button, Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from '../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<any>();
  const [resolutin, setResolution] = useState({height: 0, width: 0});

  async function takeImageHandler() {
    const image = await launchCamera(
      {cameraType: 'back', mediaType: 'photo', quality: 0.5},
      response => {
        if (response.assets && response.assets.length > 0) {
          console.log(response.assets[0].uri);
          setResolution({
            height: response.assets[0].height || 0,
            width: response.assets[0].width || 0,
          });
          setPickedImage(response.assets[0].uri);
        } else {
          console.log('No assets found in the response');
        }
      },
    );
  }

  let imagePriview = <Text>No image take yet.</Text>;

  if (pickedImage) {
    imagePriview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePriview}</View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">
        Take image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
