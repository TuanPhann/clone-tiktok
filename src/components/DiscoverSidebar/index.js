import styles from './StyleDiscoverSidebar.module.scss';
import classNames from 'classnames/bind';
import { IconHashtag, IconMusic } from '../icon';

const cx = classNames.bind(styles);

function DiscoverSidebar() {
    return (
        <div className={cx('wrap')}>
            <p className={cx('ptitle')}>Khám phá</p>
            <div className={cx('discoverlist')}>
                <a href="https://www.tiktok.com/tag/suthatla?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconHashtag />
                        <p>suthatla</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/tag/mackedoi?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconHashtag />
                        <p>mackedoi</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/tag/sansangthaydoi?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconHashtag />
                        <p>sansangthaydoi</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/music/Y%C3%AAu-%C4%90%C6%A1n-Ph%C6%B0%C6%A1ng-L%C3%A0-G%C3%AC-MEE-Remix-7090803692152031234?lang=vi-VN">
                    <div className={cx('discoveritemmusic')}>
                        <IconMusic />
                        <p>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media &amp; h0n</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/music/V%E1%BB%81-Nghe-M%E1%BA%B9-Ru-7085517305542658842?lang=vi-VN">
                    <div className={cx('discoveritemmusic')}>
                        <IconMusic />
                        <p>Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/music/Thi%C3%AAn-Th%E1%BA%A7n-T%C3%ACnh-Y%C3%AAu-7045285812895877890?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconMusic />
                        <p>Thiên Thần Tình Yêu - RICKY STAR</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/tag/7749hieuung?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconHashtag />
                        <p>7749hieuung</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/tag/genzlife?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconHashtag />
                        <p>genzlife</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/music/T%C3%ACnh-%C4%90%C3%A3-%C4%90%E1%BA%A7y-M%E1%BB%99t-Tim-7081193645302500123?lang=vi-VN">
                    <div className={cx('discoveritem')}>
                        <IconMusic />
                        <p>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/music/Th%E1%BA%B1ng-H%E1%BA%A7u-Th%C3%A1i-Ho%C3%A0ng-Remix-7078552239287159579?lang=vi-VN">
                    <div className={cx('discoveritemmusic')}>
                        <IconMusic />
                        <p>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default DiscoverSidebar;
