import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { ProductCard } from '../components';
import { PRODUCT_URL } from '../../env.json';
import { Product } from '../types';
import products from '../data/products.json'
import { AppDispatch } from '../redux/store';
import RootActions from '../redux/actions';

export const MarketScreen: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);

  const { addItem } = RootActions.ItemActions;
  const dispatch: AppDispatch = useDispatch();

  const addToCart = (product: Product) => { dispatch(addItem({...product, quantity:1}))} 
  

  useEffect(() => {
    if (PRODUCT_URL === "") {
      setProductList(products)
    } else {
      fetch(PRODUCT_URL)
      .then((response) => response.json())
      .then((json) => setProductList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }
  }, []);

  return (
    <View>
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
