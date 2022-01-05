import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  MainBottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  MainBottomContainerBackground: {
    width: '100%',
    position: 'absolute',
    height: 120,
    bottom: 0,
    left: 0,
  },
  MainBottomContainerContentEvents: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 120,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 5,
  },
  MainBottomContainerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },

  MainBottomContainerContentQr: {
    backgroundColor: '#FCCD4E',
    width: 180,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 5,
  },
  MainBottomContainerContentQrText: {
    color: '#3A3A3A',
    fontSize: 16,
    fontWeight: '600',
  },
  MainBottomContainerContentQrBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  MainBottomContainerContentLeft: {
    paddingLeft: 15,
    flexDirection: 'row',
  },
  MainBottomContainerContentRight: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: 70,
  },
  navItemSvg: {
    marginBottom: 5,
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  navItemActive: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  buttonQR: {
    backgroundColor: '#000',
    borderRadius: 100,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    top: -25,
  },
  imageBackContain: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageBack: {
    resizeMode: 'contain',
    width: 300,
    height: 100,
  },
  navText: {
    fontSize: 10,
  },
});
