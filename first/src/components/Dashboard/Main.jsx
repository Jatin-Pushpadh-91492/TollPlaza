import React, { useState } from 'react';
import { Layout, Button, Modal, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import Footer from '../Footer';
import Home from './Home'; // Ensure the correct import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Main = ({ children, user }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className='sidebar'
        >
          <div className="logo">
            <Logo />
          </div>
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout className="flex flex-col flex-grow">
          <Header className="site-layout-background" style={{ padding: 0, background: colorBgContainer }}>
            <div className="flex items-center justify-between px-4">
              <Button
                type='text'
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold mt-4">Welcome {user}</span>
                <Button
                  onClick={showModal}
                  className="text-white mt-4 bg-blue-500 hover:bg-blue-600 rounded font-bold"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>Log Out</span>
                </Button>
              </div>
            </div>
          </Header>
          <Content className="flex-grow">
            <div style={{ padding: 24, minHeight: 360 }}>
              {children || <Home />}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
      <Modal
        title="Logout Confirmation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="Cancel"
      >
        <p>Do you want to Logout?</p>
      </Modal>
    </div>
  );
};

export default Main;
