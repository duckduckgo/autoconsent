import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dlink.com_wry', ['https://www.dlink.com/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
