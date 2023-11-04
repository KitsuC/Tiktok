/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <img src={images.language} />,
    title: 'English',
  },
  {
    icon: <img src={images.help} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <img src={images.keyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <img src={images.dark} />,
    title: 'Dark mode',
  },
];

function Header() {
  const [inputHasContent, setInputHasContent] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchWidth, setSearchWidth] = useState(0);

  const searchRef = useRef();
  const searchResultRef = useRef();

  const handleInputChange = (e) => {
    setInputHasContent(e.target.value.trim().length > 0);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  useEffect(() => {
    // Hàm này sẽ chạy khi trang web được tải và sau đó gắn sự kiện lắng nghe thay đổi kích thước cửa sổ.
    function handleResize() {
      if (searchRef.current) {
        setSearchWidth(searchRef.current.offsetWidth);
      }
    }

    // Gắn sự kiện lắng nghe thay đổi kích thước cửa sổ.
    window.addEventListener('resize', handleResize);

    // Gọi lần đầu tiên để thiết lập chiều rộng ban đầu.
    handleResize();

    // Loại bỏ sự kiện lắng nghe khi component bị hủy.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          appendTo={document.body}
          interactive="true"
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div
              className={cx('search-result')}
              tabIndex="-1"
              {...attrs}
              ref={searchResultRef}
              style={{ width: searchWidth + 'px' }}
              {...attrs}
            >
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')} ref={searchRef}>
            <input placeholder="Search" spellCheck={false} onChange={handleInputChange} />
            <button className={cx('clear-btn')}>
              <img src={images.close} />
            </button>
            {/* <img src={images.load} className={cx('loading')} /> */}
            <button className={cx('search-btn')}>
              <svg
                className={cx('svg-search', { 'svg-search-active': inputHasContent })}
                width="24"
                data-e2e=""
                height="24"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                ></path>
              </svg>
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button text leftIcon={<img src={images.plus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
          <button className={cx('app-btn')}>
            <img src={images.app} />
          </button>
          <Menu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <img src={images.menu} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
