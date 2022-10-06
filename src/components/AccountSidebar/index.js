import styles from './StyleAccountSidebar.module.scss';
import classNames from 'classnames/bind';
import Account from '../account';
import { test } from '../../Data/DataAccount';
const cx = classNames.bind(styles);

function AccountSidebar() {
    return (
        <div className={cx('wrap')}>
            <p className={cx('ptitle')}>Tài khoản được đề xuất</p>
            {test.map((acc) => {
                return <Account key={acc.id} acc={acc} />;
            })}

            <div>
                <p className={cx('pseeall')}>Xem tất cả</p>
            </div>
        </div>
    );
}

export default AccountSidebar;
