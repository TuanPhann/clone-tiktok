import styles from './StyleHeader.module.scss';
import classNames from 'classnames/bind';
import Images from '../../assets/logos';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import Button from '../../components/Button';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { IconThreeDotsVertical, IconAdd } from '../../components/icon';
import MenuHeader from '../../components/MenuHeader';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('logo-tiktok')}>
                <Link to="/">
                    <img src={Images.logo} alt="logo tiktok" />
                </Link>
            </div>
            <div className={cx('search')}>
                <Search />
            </div>
            <div className={cx('log-in')}>
                <Button btnUpload iconLeft={<IconAdd />}>
                    Tải lên
                </Button>
                <Button btnLogin>Đăng nhập</Button>
                <Tippy
                    offset={[-80, 5]}
                    delay={[300, 400]}
                    hideOnClick
                    interactive
                    render={(attrs) => (
                        <div className={cx('menu')} tabIndex="-1" {...attrs}>
                            <MenuHeader />
                        </div>
                    )}
                >
                    <button className={cx('btn-menu')}>
                        <IconThreeDotsVertical />
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default Header;
