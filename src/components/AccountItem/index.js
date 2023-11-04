/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/dcfb70720d26a8ed7d04ec719d31a083~c5_300x300.webp?x-expires=1698472800&x-signature=Y5hje6pAR1CEviA3bwx8xsA87NA%3D"
        alt="Hoa"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <div className={cx('name')}>
          <span>Hoang.2.8</span>
          <div className={cx('check')}>
            <img src={images.check} />
          </div>
        </div>
        <span className={cx('userName')}>Hoàng sợ mất 3 đao</span>
      </div>
    </div>
  );
}

export default AccountItem;
