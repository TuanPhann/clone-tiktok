import styles from './StyleHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx('wrap')}>this is Header</div>;
}

export default Header;
