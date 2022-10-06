import styles from './StyleAccount.module.scss';
import classNames from 'classnames/bind';
import { IconCheck } from '../../components/icon';

const cx = classNames.bind(styles);

function Account({ acc }) {
    return (
        <div className={cx('user')}>
            <p>{acc.title}</p>
            {acc.tick && <IconCheck />}
        </div>
    );
}

export default Account;
