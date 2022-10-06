import styles from './StyleAccount.module.scss';
import classNames from 'classnames/bind';
import { IconCheck1 } from '../../icon';

const cx = classNames.bind(styles);

function ItemAccount({ info }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('user')}>
                <a href={info.url} className={cx('avatar')}>
                    <img src={info.image} alt="avatar" height="32px" width="32px" />
                </a>
                <a href={info.url} className={cx('username')}>
                    <div>
                        <h4>{info.nickName}</h4>
                        <IconCheck1 />
                    </div>
                    <p>{info.title}</p>
                </a>
            </div>
        </div>
    );
}

export default ItemAccount;
