import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Button } from '../../../components';
import { Category } from '../../../@types';
import { CardImg, CategoryInfo } from '../styles';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const history = useHistory();
  const categoryName = useMemo(() => {
    return category.name.toLowerCase();
  }, [category.name]);

  return (
    <Card>
      <CardImg bgImg={category.image} title={category.name} />
      <CategoryInfo>
        <h3>{category.name}</h3>
        <Button
          variant="primary"
          title={`Visualizar ${categoryName}`}
          onClick={() => history.push(`/category/${category.id}`)}
        >
          Visualizar {categoryName}
        </Button>
      </CategoryInfo>
    </Card>
  );
};

export default CategoryItem;
