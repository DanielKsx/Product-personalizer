 import styles from './Product.module.scss'
 import PropTypes from 'prop-types'
 import clsx from 'clsx'

 const OptionSize = props => {

    const isActive = props.name === props.currentSize;

    return (
        <li>
            <button type="button" onClick={() => props.setCurrentSize(props.name)} className={clsx(isActive && styles.active)}>{props.name}</button>
        </li>
    );
 };

 OptionSize.propTypes = {
    name: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
 };

 export default OptionSize;
 