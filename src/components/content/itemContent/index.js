import styles from './StyleItemContent.module.scss';
import classNames from 'classnames/bind';
import { IconPlayFill, IconVolumeUpOutline, IconFlag, IconHeart, IconMessageSquare, IconShare } from '../../icon';

const cx = classNames.bind(styles);

function ItemContent({ info }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('avatar')}>
                <div className={cx('image')}>
                    <img src={info.image} alt="avatar" />
                </div>
            </div>
            <div className={cx('info-video')}>
                <div className={cx('title')}>
                    <h3>{info.nickName}</h3>
                    <p>{info.title}</p>
                </div>
                <div className={cx('hastag')}>
                    <h2>{info.hasTag}</h2>
                </div>
                <div className={cx('title-music')}>
                    <h4>{info.titleMusic}</h4>
                </div>
                <div className={cx('display-video')}>
                    <div className={cx('video')}>
                        <video src={info.url} />
                        <button className={cx('btn-play')}>
                            <IconPlayFill />
                        </button>
                        <button className={cx('btn-volume')}>
                            <IconVolumeUpOutline />
                        </button>
                        <button className={cx('btn-flag')}>
                            <IconFlag /> Báo cáo
                        </button>
                    </div>
                    <div className={cx('btn')}>
                        <div className={cx('icon-video')}>
                            <button>
                                <IconHeart />
                            </button>
                            <p>{info.totalHeart}</p>
                        </div>
                        <div className={cx('icon-video')}>
                            <button>
                                <IconMessageSquare />
                            </button>
                            <p>{info.totalMes}</p>
                        </div>
                        <div className={cx('icon-video')}>
                            <button>
                                <IconShare />
                            </button>
                            <p>{info.totalShare}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemContent;
