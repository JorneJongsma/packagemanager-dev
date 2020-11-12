const { Platform, build } = require('electron-builder');
const { company, productName, version, platform } = require('./package.json');

const config = {
  artifactName: `${company} ${productName} setup ${version} ${platform}.exe`,
  productName: `${company} ${productName}`,
  win: {
    publish: [
      { provider: 'github', token: '3c95c684bb9f97e6945069e8a54c60e1c12c313a' },
    ],
    target: [
      {
        target: 'nsis',
        arch: 'x64',
      },
    ],
    icon: 'build/assets/moobels.ico',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowElevation: false,
    allowToChangeInstallationDirectory: true,
    installerSidebar: 'build/assets/installerSidebar.bmp',
    license: 'build/assets/eula.txt',
    // include: "build/installer.nsh"
  },
  directories: {
    output: 'dist',
  },
  files: ['build/', '!**/*.map'],
};

build({ targets: Platform.WINDOWS.createTarget(), config })
  .then((resolved) => {
    console.log('Created: ', resolved[1]);
  })
  .catch((rejected) => {
    console.log(rejected);
  });
