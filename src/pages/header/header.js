import React from 'react';
import { Input, AutoComplete, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import SVG from 'react-inlinesvg';
import Styles from './header.scss';

const Header = () => {
  const { SubMenu } = Menu;
  const pureUser = localStorage.getItem('targetUser');
  const user = pureUser ? JSON.parse(pureUser) : null;

  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate('/dashboard');
  };

  const logOut = () => {
    localStorage.setItem('targetUser', '');
    navigate('/signIn');
  };

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
      {user && (
        <div className={Styles.nameUser}>
          <div>
            <Menu mode="inline" style={{ width: 256 }}>
              <SubMenu
                key="sub1"
                icon={<SVG src="src/assets/svg/spotify.svg" />}
                title={`${user?.fullname}`}
              >
                {user.position === 'Admin' ? (
                  <Menu.Item key="7">
                    <button className={Styles.btnRedirect} onClick={redirectToDashboard}>
                      Dashboard
                    </button>
                  </Menu.Item>
                ) : null}
                <Menu.Item key="8">
                  <button className={Styles.btnRedirect} onClick={logOut}>
                    Log Out
                  </button>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
