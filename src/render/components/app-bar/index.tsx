import React from 'react';
import { remote, ipcRenderer } from 'electron';
import style from './app-bar.module.scss';

// type Props = {};

const AppBar: React.FC = () => {
  const { name, version } = ipcRenderer.sendSync('APP_TITLE_REQUEST');

  const handleMinimize = () => {
    remote.getCurrentWindow().minimize();
  };

  const handleRestorDown = () => {
    const win = remote.getCurrentWindow()
    if(win.isMaximized()){
      win.unmaximize()
    } else {
      win.maximize()
    }
  };

  const handleClose = () => {
    remote.app.quit();
  };

  return (
    <div className={style['app-bar']}>
      <div className={style['logo']}>Logo</div>
      <div className={style['title']}>
        {name} - {version}
      </div>
      <div className={style['controll']}>
        <div onClick={handleMinimize}>Minimize</div>
        <div onClick={handleRestorDown}>RestorDown</div>
        <div onClick={handleClose}>Close</div>
      </div>
    </div>
  );
};

export default AppBar;
