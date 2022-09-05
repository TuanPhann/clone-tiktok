import styles from './StyleMenuHeader.module.scss';
import classNames from 'classnames/bind';
import { IconLanguage, IconHelp, IconKeyBourd } from '../icon';

const cx = classNames.bind(styles);

function MenuHeader() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('item')}>
                <IconLanguage className="icon" />
                <p>Tiếng Việt</p>
            </div>
            <div className={cx('item')}>
                <IconHelp className="icon" />
                <p>Phản hồi và trợ giúp</p>
            </div>
            <div className={cx('item')}>
                <IconKeyBourd className="icon" />
                <> Phím tắt trên bàn phím</>
            </div>
        </div>
    );
}

export default MenuHeader;
