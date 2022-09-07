import styles from './StyleAccountSidebar.module.scss';
import classNames from 'classnames/bind';
import { IconCheck } from '../../components/icon';
const cx = classNames.bind(styles);

function AccountSidebar() {
    return (
        <div className={cx('wrap')}>
            <p className={cx('ptitle')}>Tài khoản được đề xuất</p>
            <div className={cx('user')}>
                <a href="/@theanh28entertainment" className={cx('avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                        height="32px"
                        width="32px"
                        alt="ảnh"
                    ></img>
                </a>
                <a href="/@theanh28entertainment" className={cx('username')}>
                    <div>
                        <h4>theanh28entertainment</h4>
                        <IconCheck />
                    </div>
                    <p>Theanh28 Entertainment</p>
                </a>
            </div>
            <div className={cx('user')}>
                <a href="/@theanh28entertainment" className={cx('avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                        height="32px"
                        width="32px"
                        alt="ảnh"
                    ></img>
                </a>
                <a href="/@theanh28entertainment" className={cx('username')}>
                    <div>
                        <h4>theanh28entertainment</h4>
                        <IconCheck />
                    </div>
                    <p>Theanh28 Entertainment</p>
                </a>
            </div>
            <div className={cx('user')}>
                <a href="/@theanh28entertainment" className={cx('avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                        height="32px"
                        width="32px"
                        alt="ảnh"
                    ></img>
                </a>
                <a href="/@theanh28entertainment" className={cx('username')}>
                    <div>
                        <h4>theanh28entertainment</h4>
                        <IconCheck />
                    </div>
                    <p>Theanh28 Entertainment</p>
                </a>
            </div>
            <div className={cx('user')}>
                <a href="/@theanh28entertainment" className={cx('avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                        height="32px"
                        width="32px"
                        alt="ảnh"
                    ></img>
                </a>
                <a href="/@theanh28entertainment" className={cx('username')}>
                    <div>
                        <h4>theanh28entertainment</h4>
                        <IconCheck />
                    </div>
                    <p>Theanh28 Entertainment</p>
                </a>
            </div>
            <div className={cx('user')}>
                <a href="/@theanh28entertainment" className={cx('avatar')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                        height="32px"
                        width="32px"
                        alt="ảnh"
                    ></img>
                </a>
                <a href="/@theanh28entertainment" className={cx('username')}>
                    <div>
                        <h4>theanh28entertainment</h4>
                        <IconCheck />
                    </div>
                    <p>Theanh28 Entertainment</p>
                </a>
            </div>
            <div className={cx('userseeall')}>
                <div className={cx('user')}>
                    <a href="/@theanh28entertainment" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="/@theanh28entertainment" className={cx('username')}>
                        <div>
                            <h4>theanh28entertainment</h4>
                            <IconCheck />
                        </div>
                        <p>Theanh28 Entertainment</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="/@theanh28entertainment" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662649200&x-signature=HByAhKPk9R1kGjKvCVikwmZ6I7A%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="/@theanh28entertainment" className={cx('username')}>
                        <div>
                            <h4>theanh28entertainment</h4>
                            <IconCheck />
                        </div>
                        <p>Theanh28 Entertainment</p>
                    </a>
                </div>
                <p className={cx('pseeall')}>Ẩn bớt</p>
            </div>
            <div>
                <p className={cx('pseeall')}>Xem tất cả</p>
            </div>
        </div>
    );
}

export default AccountSidebar;
