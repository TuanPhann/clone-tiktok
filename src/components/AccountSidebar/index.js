import styles from './StyleAccountSidebar.module.scss';
import classNames from 'classnames/bind';
import Account from '../account';
const cx = classNames.bind(styles);

function AccountSidebar() {
    return (
        <div className={cx('wrap')}>
            <p className={cx('ptitle')}>Tài khoản được đề xuất</p>
<<<<<<< HEAD
            <div className={cx('userlist')}>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@theanh28entertainment" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1663034400&amp;x-signature=MS7YK6QLzgDqLwG4n41VtVifSg8%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@theanh28entertainment" className={cx('username')}>
                        <div>
                            <h4>theanh28entertainment</h4>
                            <IconCheck />
                        </div>
                        <p>Theanh28 Entertainment</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@tiin.vn" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1663034400&amp;x-signature=OlwWUmw%2FPtE7zlE4Xxb3uUj6ghI%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@tiin.vn" className={cx('username')}>
                        <div>
                            <h4>tiin.vn</h4>
                            <IconCheck />
                        </div>
                        <p>Tiin.vn</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@datvilla94" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1663034400&amp;x-signature=BGaijWpiMLShQ1Es7u03Y5xBmFY%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@datvilla94" className={cx('username')}>
                        <div>
                            <h4>datvilla94</h4>
                            <IconCheck />
                        </div>
                        <p>🔥Đạt Villa🔥</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@annhien_boiboi" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1663034400&amp;x-signature=dr9VkHyu8OtTpgFmCJ3Z2wJt%2FDc%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@annhien_boiboi" className={cx('username')}>
                        <div>
                            <h4>annhien_boiboi</h4>
                            <IconCheck />
                        </div>
                        <p>AnNhiên ❤️ BốiBối</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@manhtienkhoi_" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6f742a138c51cf4c6ac049ea6f6ff6b4~c5_100x100.jpeg?x-expires=1663034400&amp;x-signature=kBbFf2VopObEv8oeGweuu4R1tz0%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@manhtienkhoi_" className={cx('username')}>
                        <div>
                            <h4>manhtienkhoi_</h4>
                            <IconCheck />
                        </div>
                        <p>Mạnh Tiến Khôi 🐯</p>
                    </a>
                </div>
            </div>
            <div className={cx('userseeall')}>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@vnnn.official" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1662800400&amp;x-signature=DHgWdvKRg0rh3%2B%2Ff%2BBxdVePxtDs%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@vnnn.official" className={cx('username')}>
                        <div>
                            <h4>vnnn.official</h4>
                            <IconCheck />
                        </div>
                        <p>VN NGÀY NAY</p>
                    </a>
                </div>
                <div className={cx('user')}>
                    <a href="https://www.tiktok.com/@vietphuongthoa98" className={cx('avatar')}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_100x100.jpeg?x-expires=1662800400&amp;x-signature=mPI%2BAJ42oWotwWIbGorUq4cb2NU%3D"
                            height="32px"
                            width="32px"
                            alt="ảnh"
                        ></img>
                    </a>
                    <a href="https://www.tiktok.com/@vietphuongthoa98" className={cx('username')}>
                        <div>
                            <h4>vietphuongthoa98</h4>
                            <IconCheck />
                        </div>
                        <p>Việt Phương Thoa</p>
                    </a>
                </div>
                <p className={cx('pseeall')}>Ẩn bớt</p>
            </div>
=======
            <Account />
>>>>>>> f454688fa4663df7b8811f5f541cae73e50fbc52
            <div>
                <p className={cx('pseeall')}>Xem tất cả</p>
            </div>
        </div>
    );
}

export default AccountSidebar;
