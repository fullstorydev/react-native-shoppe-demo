import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { ProductCard } from '../components';
import { PRODUCT_URL } from '../../env.json';
import { Product } from '../types';
import products from '../data/products.json'
import { AppDispatch } from '../redux/store';
import RootActions from '../redux/actions';
import {StackScreenProps} from '@react-navigation/stack';


type Props = StackScreenProps<any, 'MarketScreen'>;

export const MarketScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);

  const { addItem } = RootActions.ItemActions;
  const dispatch: AppDispatch = useDispatch();

  const addToCart = (product: Product) => { dispatch(addItem({...product, quantity:1}))} 
  
  // TODO:(sabrina) use dispatch to fetch data
  useEffect(() => {
    if (PRODUCT_URL === "") {
      setProductList(products)
    } else {
      fetch(PRODUCT_URL)
      .then((response) => response.json())
      .then((json) => setProductList(json))
      .catch((error) => {
        console.error(error)
        // just use the local json for demo purpose
        setProductList(products)
      })
      .finally(() => setLoading(false));
    }
  }, []);

  return (
    <View>
      <Button
      title='test-navigate-to-cart'
      onPress={() => {navigate('Cart')}}>
        </Button>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {isLoading
          ? <ActivityIndicator />
          : productList.map(product => <View key={product.title}>
            <ProductCard product={product} addToCart={addToCart} />
          </View>
          )}
      </ScrollView>
    </View>
  );
}
