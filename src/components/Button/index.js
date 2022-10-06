import styles from './StyleButton.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    iconLeft = false,
    btnUpload = false,
    btnLogin = false,
    btnLoginSb = false,
    btnAccountSb = false,
    onClick,
    children,
    ...props
}) {
    let Com = 'button';

    const Props = {
        onClick,
        ...props,
    };
    const classes = cx('wrapper', { btnUpload, btnLogin, btnLoginSb, btnAccountSb });

    if (to) {
        Props.to = to;
        Com = Link;
    } else if (href) {
        Props.href = href;
        Com = 'a';
    }

    return (
        <Com className={classes} {...Props}>
            {iconLeft ? iconLeft : <Fragment />}
            <span>{children}</span>
        </Com>
    );
}

export default Button;
