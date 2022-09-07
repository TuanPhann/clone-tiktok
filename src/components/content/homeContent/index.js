import styles from './StyleHomeContent.module.scss';
import classNames from 'classnames/bind';
import ItemContent from '../itemContent';
import { DataHome } from '../../../Data/Datahome';

const cx = classNames.bind(styles);

function HomeContent() {
    return (
        <div className={cx('wrap')}>
            {DataHome.map((info) => {
                return <ItemContent key={info.id} info={info} />;
            })}
        </div>
    );
}

export default HomeContent;
