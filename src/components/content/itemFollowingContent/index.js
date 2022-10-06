import styles from './StyleItemFollowing.module.scss';
import classNames from 'classnames/bind';
import { IconCheck2 } from '../../icon';

const cx = classNames.bind(styles);

function ItemFollowing({ info }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('item')}>
                <a href={info.url}>
                    <div className={cx('video')}>
                        <video src={info.video} />
                    </div>
                    <div className={cx('info')}>
                        <img src={info.image} alt="avatar" />
                        <h5>{info.title}</h5>
                        <div>
                            <h6>{info.nickName}</h6>
                            <IconCheck2 />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ItemFollowing;
