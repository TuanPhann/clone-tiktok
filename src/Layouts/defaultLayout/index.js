import styles from './StyleDefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../Header';
import Sidebar from '../Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('wrap')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
