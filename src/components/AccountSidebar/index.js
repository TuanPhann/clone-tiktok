import styles from './StyleAccountSidebar.module.scss';
import classNames from 'classnames/bind';
import ItemAccount from './itemAccount';
import { DataAccountSb } from './../../Data/DataAccount';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountSidebar() {
    return (
        <div className={cx('wrap')}>
            <p>Tài khoản được đề xuất</p>
            {DataAccountSb.map((info) => {
                return <ItemAccount key={info.id} info={info} />;
            })}
            <div className={cx('button')}>
                <Button btnAccountSb>Xem tất cả</Button>
            </div>
        </div>
    );
}

export default AccountSidebar;
