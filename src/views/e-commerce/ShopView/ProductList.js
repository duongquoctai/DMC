import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { makeStyles } from '@mui/styles';
import { Box, Skeleton, Grid } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <Grid container spacing={3}>
    {[...Array(12)].map((item, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton
          component={Box}
          variant="rectangular"
          sx={{ width: '100%', paddingTop: '115%', borderRadius: 2 }}
        />
      </Grid>
    ))}
  </Grid>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  isLoad: PropTypes.bool,
  className: PropTypes.string
};

function ProductList({ products, isLoad, className, ...other }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={clsx(classes.root, className)}
      {...other}
    >
      {products.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductItem product={product} />
        </Grid>
      ))}

      {isLoad && SkeletonLoad}
    </Grid>
  );
}

export default ProductList;
