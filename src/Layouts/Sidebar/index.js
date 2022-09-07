import styles from './StyleSidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IconFollowing, IconHome, IconLive } from '../../components/icon';
import AccountSidebar from '../../components/AccountSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('header')}>
                <NavLink to="/" className={cx('navlink')}>
                    <IconHome className="iconSidebar" />
                    <h2>Dành cho bạn</h2>
                </NavLink>
                <NavLink to="/following" className={cx('navlink')}>
                    <IconFollowing className="iconSidebar" />
                    <h2>Đang Follow</h2>
                </NavLink>
                <NavLink to="/live" className={cx('navlink')}>
                    <IconLive />
                    <h2>Live</h2>
                </NavLink>
            </div>
            <div className={cx('login')}>
                <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            </div>
            <AccountSidebar />
        </div>
    );
}

export default Sidebar;
