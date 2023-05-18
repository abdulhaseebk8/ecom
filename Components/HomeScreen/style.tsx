import {ScrollView} from 'react-native';
import styled from 'styled-components';

export const Container = styled(ScrollView)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const SectionHeader = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  width: 100%;
  margin-top: 30px;
  margin-bottom: 12px;
`;

export const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: center;

  color: #000000;
`;

export const LinkClickable = styled.TouchableOpacity`
  margin-left: auto;
`;

export const ProductsView = styled.TouchableOpacity`
  width: 40%;
  height: 220px;
  margin: 8px;
  background: #c9c8f6cc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const NavigateButton = styled.TouchableOpacity`
  width: 50%;
  height: 50;
  margin: 8px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
`;

export const InnerView = styled.View`
  width: 100%;
  height: 160px;
  margin-top: 10px;
`;

export const ProductName = styled.Text`
  text-align: center;
  font-size: 10px;
  font-color: black;
`;

export const SelectText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-color: black;
  margin-top: 10px;
`;

export const NameView = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImageView = styled.View`
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-top: 10px;
`;
