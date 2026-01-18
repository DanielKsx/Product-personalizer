import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
    const isActive = props.color === props.currentColor;
    
    return (
        <li>
            <button type="button" onClick={() => props.setCurrentColor(props.color)} className={clsx(props.prepareColorClassName(props.color), isActive && styles.active)}></button>
        </li>
    );
};
                
                
OptionColor.propTypes = {
    color: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
};

export default OptionColor;