import styles from './StyleSearch.module.scss';
import classNames from 'classnames/bind';
import { IconSearch } from '../icon';

const cx = classNames.bind(styles);

function Saerch() {
    return (
        <div className={cx('wrap')}>
            <input placeholder="Tìm kiếm tài khoản và video" />
            <button>
                <IconSearch />
            </button>
        </div>
    );
}

export default Saerch;
