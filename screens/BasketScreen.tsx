import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import {useSelector, connect} from 'react-redux';
import ProductActions from '../redux/product-redux';

const PriceText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 29px */
  /* Black */
  color: #222222;
`;

const ItemPriceText = styled.Text`
color: black;
font-size: 18px;
font-weight: bold;
margin-left: auto;
margin-top: auto;
margin-bottom: 10%;
margin-right: 10%;
`;

const Container = styled(ScrollView)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const ProductName = styled.Text`
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

const BrandHeading = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-top: 10px;
  margin-left: 10px;
  color: #9b9b9b;
`;

const BrandNameText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #222222;
  margin-top: 10px;
  margin-left: 10px;
`;

const ShowPriceAndHeading = styled.View`
  flex-direction: row;
  height: auto;
  width: 100%;
`;

const IndividualProductList = styled.View`
  flex-direction: row;
  height: 100%;
`;

const MinusPlusButtons = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 20px;
  width: 22px;
  height: 22px;
  background-color: #f8f9f5;
  align-items: center;
  justify-content: center;
`;

const RemoveButton = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 5px;
`;

const Product = styled.View`
  width: 343px;
  height: 200px;
  background: #ffffff;
  margin-top: 10px;
`;

const BasketScreen = ({saveSelectedProducts}: any) => {
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const {selectedProducts} = useSelector(state => state.user);
  const [numberOfItems, setNumberOfItems] = useState({});

  const removeItems = (item: any) => {
    let copyOfSelectedProducts = JSON.parse(JSON.stringify(selectedProducts));
    let filteredData = copyOfSelectedProducts?.filter(
      (copy: any) => copy.id != item.id,
    );
    saveSelectedProducts(filteredData);
  };

  const handleItemCountChange = (itemId: any, count: any) => {
    setNumberOfItems(prevCounts => ({
      ...prevCounts,
      [itemId]: count,
    }));
  };

  return (
    <Container>
      <ShowPriceAndHeading>
        <PriceText>Basket Screen</PriceText>
      </ShowPriceAndHeading>
      {selectedProducts?.map((item: any, index: any) => {
        const itemId = item.id;
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        const count = numberOfItems[itemId] || 1;
        return (
          <Product key={itemId}>
            <IndividualProductList>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: item.img}}
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <View style={{flex: 1}}>
                <ProductName>{item.name}</ProductName>
                <View
                  style={{flexDirection: 'row', width: '80%', height: 'auto'}}>
                  <BrandHeading>Color :</BrandHeading>
                  <BrandNameText>{item.colour}</BrandNameText>
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <MinusPlusButtons
                    onPress={() => handleItemCountChange(itemId, count - 1)}>
                    <Text
                      style={{
                        color: '#9B9B9B',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      -
                    </Text>
                  </MinusPlusButtons>
                  <MinusPlusButtons style={{backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      {count}
                    </Text>
                  </MinusPlusButtons>
                  <MinusPlusButtons
                    onPress={() => handleItemCountChange(itemId, count + 1)}>
                    <Text
                      style={{
                        color: '#9B9B9B',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      +
                    </Text>
                  </MinusPlusButtons>
                </View>
              </View>
              <View style={{flex: 1}}>
                <RemoveButton onPress={() => removeItems(item)}>
                  <Text>Remove</Text>
                </RemoveButton>
                <ItemPriceText>
                  {item.price + ' $'}
                </ItemPriceText>
              </View>
            </IndividualProductList>
          </Product>
        );
      })}
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSelectedProducts: (data: any) =>
      // @ts-expect-error TS(2722): Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      dispatch(ProductActions.saveSelectedProducts(data)),
  };
};
export default connect(null, mapDispatchToProps)(BasketScreen);
