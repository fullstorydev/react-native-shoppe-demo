import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import { IMAGE_BASE_URL } from '../../env.json';
import { Product } from '../types';

interface ProductCardProps {
  product: Product,
  addToCart: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }: ProductCardProps) => {
  return (
    <View key={product.title} style={{ width: '100%' }}>
      <Card>
        <Card.Cover
          source={{ uri: IMAGE_BASE_URL + product.image }}
        />
        <Card.Content>
          <Title>{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained'
            onPress={() => { addToCart(product) }}
          >Add To Cart</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}