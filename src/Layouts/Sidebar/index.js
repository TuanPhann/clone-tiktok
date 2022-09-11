import styles from './StyleSidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { IconFollowing, IconHome, IconLive } from '../../components/icon';
import AccountSidebar from '../../components/AccountSidebar';
import DiscoverSidebar from '../../components/DiscoverSidebar';
import FooterSidebar from '../../components/FooterSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('header')}>
                <NavLink to="/" className={cx('navlink')}>
                    <IconHome />
                    <h2>Dành cho bạn</h2>
                </NavLink>
                <NavLink to="/following" className={cx('navlink')}>
                    <IconFollowing />
                    <h2>Đang Follow</h2>
                </NavLink>
                <NavLink to="/live" className={cx('navlink')}>
                    <IconLive />
                    <h2>LIVE</h2>
                </NavLink>
            </div>
            <div className={cx('login')}>
                <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            </div>
            <AccountSidebar />
            <DiscoverSidebar />
            <FooterSidebar />
        </div>
    );
}

export default Sidebar;
