import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';

export interface BottomTabsMenuProps {}

export const BottomTabsMenu: React.FC<BottomTabsMenuProps> = ({}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.MainBottomContainer}>
      <View style={styles.MainBottomContainerContent}>
        <View style={styles.imageBackContain}>
          {/* <ImageBackground
            // source={require('../../assets/Images/backmenu.png')}
            style={styles.imageBack}
          /> */}
        </View>

        <View style={{flex: 1, alignSelf: 'center'}}>
          <TouchableOpacity
            style={styles.buttonQR}
            onPress={() => {
              console.log('QRScannerScreen');
            }}>
            <MaterialIcons name="home" color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
