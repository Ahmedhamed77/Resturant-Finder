import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  touchableOpacityContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 24,
    overflow: 'hidden',
  },
  containerHeaderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    paddingBottom: 16,
  },
  image: {
    width: '100%',
    height: 198,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleContainer: {paddingBottom: 4},
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 19,
    color: '#69C64A',
  },
  descContainer: {
    paddingBottom: 12,
  },
  descStyle: {
    fontSize: 20,
    lineHeight: 24,
    color: '#222222',
    fontWeight: 'bold',
  },
  dateStyle: {
    color: '#ABABAB',
    fontSize: 14,
    lineHeight: 17,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  handlerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
