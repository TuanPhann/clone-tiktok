import styles from './StyleHome.module.scss';
import classNames from 'classnames/bind';
import HomeContent from '../../components/content/homeContent';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrap')}>
            <HomeContent />
        </div>
    );
}

export default Home;
