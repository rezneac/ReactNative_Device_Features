import {StyleSheet} from 'react-native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  icon: string;
  size: number;
  color: string | undefined;
  onPress: () => void;
}

const IconButton = ({icon, size, color, onPress}: IProps) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
