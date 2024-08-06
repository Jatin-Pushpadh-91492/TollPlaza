import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home" className="menu-item">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="audit" icon={<AppstoreOutlined />}>
        <Link to="/Audit_page" className="menu-item">
          Audit
        </Link>
      </Menu.Item>
      <Menu.Item key="report" icon={<AreaChartOutlined />}>
        <Link to="/Report_page" className="menu-item">
          Reports
        </Link>
      </Menu.Item>
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
      <Link to="/Transaction_page" className="menu-item">
          Transaction
        </Link>
      </Menu.Item>
      <Menu.Item key="ETC-payment" icon={<PayCircleOutlined />}>
      <Link to="/ETCTransaction_page" className="menu-item">
          ETC Transaction
        </Link>
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
      <Link to="/Setting_page" className="menu-item">
          Setting
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
