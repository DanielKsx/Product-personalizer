import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage';
import ProductForm from './ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1)];
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`
      Summary
      ==========
      Name: ${props.title}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}
      `
      );
  };

  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    const additionalPrice = selectedSize ? selectedSize.additionalPrice :0;
    return props.basePrice + additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={prepareColorClassName}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
};

export default Product;