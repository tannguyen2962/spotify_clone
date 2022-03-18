import React from 'react';
import { Input, AutoComplete, Menu } from 'antd';

import SVG from 'react-inlinesvg';

import Styles from './header.scss';

const Header = () => {
  const { SubMenu } = Menu;
  const pureUser = localStorage.getItem('targetUser');
  const user = JSON.parse(pureUser);

  return (
    <div className={Styles.header}>
      <div className={Styles.searchNavbar}>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{ width: 350 }}
        >
          <Input.Search size="medium" placeholder="Artists,songs,or podcasts " />
        </AutoComplete>
      </div>
      <div className={Styles.nameUser}>
        <div>
          <Menu mode="inline" style={{ width: 256 }}>
            <SubMenu
              key="sub1"
              icon={<SVG src="src/assets/svg/spotify.svg" />}
              title={`${user.fullname}`}
            >
              <Menu.Item key="7">Option 1</Menu.Item>
              <Menu.Item key="8">Option 2</Menu.Item>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
