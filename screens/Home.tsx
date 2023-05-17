import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { getAllProductsData } from '../util/apiList'
import styled from 'styled-components';
import UserActions from "../redux/user-redux";
import {connect} from 'react-redux'

const Container = styled(ScrollView)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const SectionHeader = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  width: 100%;
  margin-top: 30px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: center;

  color: #000000;
`;


const LinkClickable = styled.TouchableOpacity`
  margin-left: auto;
`;

const ProductsView = styled.TouchableOpacity`
  width: 40%;
  height: 220px;
  margin: 8px;
  background: #c9c8f6cc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const NavigateButton = styled.TouchableOpacity`
  width: 50%;
  height: 50;
  margin: 8px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
  margin-top:10px;
`;

const InnerView = styled.View`
width: 100%;
height: 160px;
margin-top: 10px;
`;

const ProductName = styled.Text`
  text-align: center;
  font-size: 10px;
  font-color: black;
`;

const SelectText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-color: black;
  margin-top: 10px;
`;

const NameView = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap:wrap;
  align-items:center;
  justify-content: center;

`;

const ImageView = styled.View`
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-top:10px;

`;



const Home = ({ navigation, saveSelectedProducts}) => {
const [products, setProducts] = React.useState([])
const [selectedItems, setSelectedItems] = React.useState([])

 React.useEffect(()=>{
  getProductsData()
 },[])

const showSelected = (item) => {
  let itemId = item?.item?.id;
  let selectedItem = products?.find((product) => product.id === itemId);
  if (selectedItem) {
    selectedItem.selected = !selectedItem.selected;
    const updatedProducts = products.map((product) => {
      if (product.id === itemId) {
        return selectedItem;
      }
      return product;
    });
    setProducts(updatedProducts);
    
    if (selectedItem.selected) {
      // Push the selected item into a selected array
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
    } else {
      // Remove the unselected item from the selected array
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem.id !== itemId)
      );
    }
  }
};

const goToNextScreen = () =>{
  saveSelectedProducts(selectedItems)
  navigation.navigate('BasketScreen')
}


 const returnProducts = React.useCallback(()=>{
  let defaultImage = 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024'
  return (
    <>
      <SectionHeader>
        <SectionTitle>Products</SectionTitle>
        <LinkClickable>
        </LinkClickable>
      </SectionHeader>
      <FlatList
        data={products}
        renderItem={(item, index) => (
          <ProductsView onPress={()=> showSelected(item)} key={index}>
            <InnerView>
              <NameView>
           <ProductName style={{fontWeight: 'bold'}}>Name</ProductName>
           <ProductName > {' '+item?.item?.name}</ProductName>
            </NameView>
            <ImageView>
              <Image
               src={item.item.img? item.item.img :defaultImage}
               resizeMode="contain"
               style={{width: '100%', height: '100%'}}
              />
             </ImageView>
             <SelectText style={{color: item.item.selected? 'red':'black'}}>{item.item.selected? 'Selected': 'Add to Basket'}</SelectText>

           </InnerView>
           
          </ProductsView>
          
        )}
        numColumns={2}
      />
    </>
  );
 },[products])
  



 const getProductsData = async () =>{
  let dataToShow = await getAllProductsData()
  if(dataToShow){
    const updatedDataToShow = dataToShow.map((item) => {
      return {
        ...item,
        selected: false
      };
    });
    setProducts(updatedDataToShow)
  }
 }


  return (
    <Container>
       {returnProducts()}
       <NavigateButton onPress={()=> goToNextScreen()}>
        <Text>Navigate to basket</Text>
       </NavigateButton>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
      saveSelectedProducts: (data) => dispatch(UserActions.saveSelectedProducts(data)),
    };
  };
  export default connect(null, mapDispatchToProps)(Home);