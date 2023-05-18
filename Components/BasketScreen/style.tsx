import {ScrollView} from 'react-native';
import styled from 'styled-components';

export const PriceText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 29px */
  /* Black */
  color: #222222;
`;

export const ItemPriceText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 10%;
  margin-right: 10%;
`;

export const Container = styled(ScrollView)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const ProductName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;

export const BrandHeading = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-top: 10px;
  margin-left: 10px;
  color: #9b9b9b;
`;

export const BrandNameText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #222222;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ShowPriceAndHeading = styled.View`
  flex-direction: row;
  height: auto;
  width: 100%;
`;

export const IndividualProductList = styled.View`
  flex-direction: row;
  height: 100%;
`;

export const MinusPlusButtons = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 20px;
  width: 22px;
  height: 22px;
  background-color: #f8f9f5;
  align-items: center;
  justify-content: center;
`;

export const RemoveButton = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 5px;
`;

export const Product = styled.View`
  width: 343px;
  height: 200px;
  background: #ffffff;
  margin-top: 10px;
`;
