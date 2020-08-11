import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { monetaryFormat } from '../../utils';
import { Category as CategoryType } from '../../@types';

import ProductItem from './ProductItem';
import { Container, Content, ProductsContainer } from './styles';

const Category: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({} as CategoryType);

  useEffect(() => {
    async function loadCategory(): Promise<void> {
      try {
        const { data: response } = await api.get<CategoryType>(
          `/categories/${id}`,
        );

        const formattedCategory = {
          ...response,
          items: response.items.map(product => ({
            ...product,
            formattedPrice: monetaryFormat(product.unit_price),
          })),
        };

        setCategory(formattedCategory);
      } catch (error) {
        toast.error('Categoria não encontrada');
      }

      setLoading(false);
    }

    loadCategory();
  }, [id]);

  return (
    <Container>
      <Content>
        {!loading && (
          <ProductsContainer>
            {category.items &&
              category.items.map(product => (
                <ProductItem key={product.id} product={product} />
              ))}
          </ProductsContainer>
        )}
      </Content>
    </Container>
  );
};

export default Category;
