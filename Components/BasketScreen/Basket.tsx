import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import ProductActions from '../../redux/product-redux';
import {
  PriceText,
  ItemPriceText,
  Container,
  ProductName,
  BrandHeading,
  BrandNameText,
  ShowPriceAndHeading,
  IndividualProductList,
  MinusPlusButtons,
  RemoveButton,
  Product,
} from './style';
import { ProductProperties } from '../product';

const BasketScreen = ({ saveSelectedProducts }: any) => {
  const { selectedProducts } = useSelector((state) => state.user);
  const [numberOfItems, setNumberOfItems] = useState<{ [key: number]: number }>({});

  const removeItems = (item: ProductProperties) => {
    const filteredData = selectedProducts.filter((copy: ProductProperties) => copy.id !== item.id);
    saveSelectedProducts(filteredData);
  };

  const handleItemCountChange = (itemId: number, count: number) => {
    setNumberOfItems((prevCounts) => ({
      ...prevCounts,
      [itemId]: count,
    }));
  };

  const calculatePrice = (item: ProductProperties, count: number) => {
    return item.price * count;
  };

  let totalPrice: number = 0;

  return (
    <Container>
      <ShowPriceAndHeading>
        <PriceText>Basket Screen</PriceText>
      </ShowPriceAndHeading>

      {selectedProducts.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>No items selected</Text>
        </View>
      ) : (
        <ScrollView>
          {selectedProducts.map((item: ProductProperties, index: number) => {
            const itemId: number = item.id;
            const count: number = numberOfItems[itemId] || 1;
            const price: number = calculatePrice(item, count);
            totalPrice += price;

            return (
              <Product key={itemId}>
                <IndividualProductList>
                  <View style={{ flex: 1 }}>
                    <Image
                      source={{ uri: item.img }}
                      resizeMode="contain"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <ProductName>{item.name}</ProductName>
                    <View style={{ flexDirection: 'row', width: '80%', height: 'auto' }}>
                      <BrandHeading>Color :</BrandHeading>
                      <BrandNameText>{item.colour}</BrandNameText>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                      <MinusPlusButtons onPress={() => handleItemCountChange(itemId, count - 1)}>
                        <Text style={{ color: '#9B9B9B', fontSize: 18, fontWeight: 'bold' }}>-</Text>
                      </MinusPlusButtons>
                      <MinusPlusButtons style={{ backgroundColor: 'white' }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{count}</Text>
                      </MinusPlusButtons>
                      <MinusPlusButtons onPress={() => handleItemCountChange(itemId, count + 1)}>
                        <Text style={{ color: '#9B9B9B', fontSize: 18, fontWeight: 'bold' }}>+</Text>
                      </MinusPlusButtons>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <RemoveButton onPress={() => removeItems(item)}>
                      <Text>Remove</Text>
                    </RemoveButton>
                    <ItemPriceText>{price.toFixed(2)} $</ItemPriceText>
                  </View>
                </IndividualProductList>
              </Product>
            );
          })}
        </ScrollView>
      )}
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSelectedProducts: (data: ProductProperties[]) =>
      dispatch(ProductActions.saveSelectedProducts(data)),
  };
};

export default connect(null, mapDispatchToProps)(BasketScreen);
