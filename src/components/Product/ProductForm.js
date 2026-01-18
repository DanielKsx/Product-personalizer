import styles from './Product.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import OptionSize from './OptionSize';
import OptionColor from './OptionColor';

const ProductForm = props => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size => (
                    <OptionSize key={size.name} name={size.name} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
                ))}
            </ul>
        </div>
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => (
                <OptionColor key={color} color={color} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} />
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

ProductForm.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            additionalPrice: PropTypes.number,
        })
    ).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
