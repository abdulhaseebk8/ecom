import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { getAllProductsData } from '../../util/apiList';
import ProductActions from '../../redux/product-redux';
import { connect } from 'react-redux';
import {
  Container,
  SectionHeader,
  SectionTitle,
  LinkClickable,
  ProductsView,
  NavigateButton,
  InnerView,
  ProductName,
  SelectText,
  NameView,
  ImageView,
} from './style';
import { ProductProperties } from '../product';
import { ApiConsts } from '../../util/app.constant';

const Home = ({ navigation, saveSelectedProducts }: any) => {
  const [products, setProducts] = useState<ProductProperties[]>([]);
  const [selectedItems, setSelectedItems] = useState<ProductProperties[]>([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const showSelected = (item: ProductProperties) => {
    const itemId = item.id;
    const selectedItem = products.find(product => product.id === itemId);
    if (selectedItem) {
      selectedItem.selected = !selectedItem.selected;
      const updatedProducts = products.map(product => {
        if (product.id === itemId) {
          return selectedItem;
        }
        return product;
      });
      setProducts(updatedProducts);

      if (selectedItem.selected) {
        setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedItem]);
      } else {
        setSelectedItems(prevSelectedItems =>
          prevSelectedItems.filter(selectedItem => selectedItem.id !== itemId)
        );
      }
    }
  };

  const goToNextScreen = () => {
    saveSelectedProducts(selectedItems);
    navigation.navigate('BasketScreen');
  };

  const returnProducts = useCallback(() => {
    const defaultImage = ApiConsts.DEFAULT_IMAGE;
    return (
      <>
        <SectionHeader>
          <SectionTitle>Products</SectionTitle>
          <LinkClickable></LinkClickable>
        </SectionHeader>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductsView onPress={() => showSelected(item)}>
              <InnerView>
                <NameView>
                  <ProductName style={{ fontWeight: 'bold' }}>Name</ProductName>
                  <ProductName>{' ' + item.name}</ProductName>
                </NameView>
                <ImageView>
                  <Image
                    source={item.img ? { uri: item.img } : { uri: defaultImage }}
                    resizeMode="contain"
                    style={{ width: '100%', height: '100%' }}
                  />
                </ImageView>
                <SelectText style={{ color: item.selected ? 'red' : 'black' }}>
                  {item.selected ? 'Selected' : 'Add to Basket'}
                </SelectText>
              </InnerView>
            </ProductsView>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </>
    );
  }, [products]);

  const getProductsData = async () => {
    try {
      const dataToShow: ProductProperties[] = await getAllProductsData();
      if (dataToShow) {
        const updatedDataToShow = dataToShow.map(item => ({
          ...item,
          selected: false,
        }));
        setProducts(updatedDataToShow);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      {returnProducts()}
      <NavigateButton onPress={goToNextScreen}>
        <Text>Navigate to basket</Text>
      </NavigateButton>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSelectedProducts: (data: ProductProperties[]) =>
      dispatch(ProductActions.saveSelectedProducts(data)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
