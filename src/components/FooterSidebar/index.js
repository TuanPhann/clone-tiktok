import styles from './StyleFooterSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterSidebar() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('linklist')}>
                <a href="https://www.tiktok.com/about?lang=vi-VN">Giới thiệu</a>
                <a href="https://www.tiktok.com/browse">TikTok Browse</a>
                <a href="https://newsroom.tiktok.com/">Bảng tin</a>
                <a href="https://www.tiktok.com/about/contact?lang=vi-VN">Liên hệ</a>
                <a href="https://careers.tiktok.com/">Sự nghiệp</a>
                <a href="https://www.bytedance.com/">ByteDance</a>
            </div>
            <div className={cx('linklist')}>
                <a href="https://www.tiktok.com/forgood">TikTok for Good</a>
                <a href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web">
                    Quảng cáo
                </a>
                <a href="https://developers.tiktok.com/?refer=tiktok_web">Developers</a>
                <a href="https://www.tiktok.com/transparency?lang=vi-VN">Transparency</a>
                <a href="https://www.tiktok.com/tiktok-rewards/vi-VN">TikTok Rewards</a>
            </div>
            <div className={cx('linklist')}>
                <a href="https://support.tiktok.com/vi-VN">Trợ giúp</a>
                <a href="https://www.tiktok.com/safety?lang=vi-VN">An toàn</a>
                <a href="https://www.tiktok.com/legal/terms-of-service?lang=vi-VN">Điều khiển</a>
                <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi-VN">Quyền riêng tư</a>
                <a href="https://www.tiktok.com/creators/creator-portal/en-us/">Creator Portal</a>
                <a href="https://www.tiktok.com/community-guidelines?lang=vi-VN">Hướng dẫn cộng đồng</a>
            </div>
            <div className={cx('divmore')}>
                <span>Thêm</span>
                <div className={cx('div')}>
                    <a href="https://www.tiktok.com/legal/law-enforcement?lang=vi-VN">
                        NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                    </a>
                </div>
            </div>
            <span>© 2022 TikTok</span>
        </div>
    );
}
export default FooterSidebar;
