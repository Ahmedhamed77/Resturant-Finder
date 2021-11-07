import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  touchableOpacityContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  containerHeaderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerFooterCard: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCardStyle: {
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  handlerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
