import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flysas.com_r1s', ['https://www.flysas.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
