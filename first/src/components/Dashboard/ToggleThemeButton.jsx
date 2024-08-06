import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='toggle-theme-btn absolute bottom-60'>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
