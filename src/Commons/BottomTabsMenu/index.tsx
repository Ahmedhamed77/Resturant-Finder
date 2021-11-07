import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface BottomTabsMenuProps {}
export const BottomTabsMenu: React.FC<BottomTabsMenuProps> = ({}) => {
  return (
    <View style={styles.MainBottomContainer}>
      <View style={styles.MainBottomContainerContent}>
        <View style={styles.imageBackContain}>
          {/* <ImageBackground
            source={require('../../Assets/Images/backmenu.png')}
            style={styles.imageBack}
          /> */}
        </View>

        <View style={styles.MainBottomContainerContentLeft}>
          <TouchableOpacity
            // style={[
            //   styles.navItem,
            //   ['MainScreen', 'MapScreen'].some(i => route.name === i) &&
            //     styles.navItemActive,
            // ]}
            onPress={() => console.log('screen')}>
            <MaterialIcons name="home" color={'red'} size={30} />

            <Text style={[styles.navText]}>Пабы</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // style={[
            //   styles.navItem,
            //   route.name === 'EventsScreen' && styles.navItemActive,
            // ]}
            onPress={() => console.log('object')}>
            <MaterialIcons name="home" color={'red'} size={30} />

            <Text style={[styles.navText]}>События</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonQR}
            onPress={() => {
              console.log('QRScannerScreen');
            }}>
            <MaterialIcons name="home" color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.MainBottomContainerContentRight}>
          <TouchableOpacity
            // style={[
            //   styles.navItem,
            //   route.name === 'EventsScreen1' && styles.navItemActive,
            // ]}
            onPress={() => console.log('object')}>
            <MaterialIcons name="home" color={'red'} size={30} />

            <Text style={[styles.navText]}>Моя карта</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // style={[
            //   styles.navItem,
            //   route.name === 'EventsScreen1' && styles.navItemActive,
            // ]}
            onPress={() => console.log('object')}>
            <MaterialIcons name="home" color={'black'} size={30} />

            <Text style={[styles.navText]}>Ещё</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
