import styles from './StyleFollowing.module.scss';
import classNames from 'classnames/bind';
import FollowingContent from '../../components/content/followingContent';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrap')}>
            <FollowingContent />
        </div>
    );
}

export default Following;
