import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinner-material';
import { ThemeContext } from 'styled-components';

import { DefaultRootState } from '../../store';
import { getCategories } from '../../store/modules/categories/actions';

import CategoryItem from './CategoryItem';
import {
  Container,
  Content,
  CategoriesContainer,
  LoadingContainer,
} from './styles';

const Categories: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(
    (state: DefaultRootState) => state.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Container>
      {loading && !categories.length ? (
        <LoadingContainer>
          <Spinner radius={100} color={colors.primary} stroke={10} visible />
        </LoadingContainer>
      ) : (
        <Content>
          <h1>Categorias</h1>

          <CategoriesContainer>
            {categories.map(category => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </CategoriesContainer>
        </Content>
      )}
    </Container>
  );
};

export default Categories;
