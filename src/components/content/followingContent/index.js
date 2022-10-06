import styles from './StyleFollowingContent.module.scss';
import classNames from 'classnames/bind';
import { DataAccountFl } from '../../../Data/DataAccountFollowing';
import ItemFollowing from '../itemFollowingContent';

const cx = classNames.bind(styles);

function FollowingContent() {
    return (
        <div className={cx('wrap')}>
            {DataAccountFl.map((info) => {
                return <ItemFollowing key={info.id} info={info} />;
            })}
        </div>
    );
}

export default FollowingContent;
