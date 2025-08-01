import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cam4.com_cyv', ['https://www.cam4.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
