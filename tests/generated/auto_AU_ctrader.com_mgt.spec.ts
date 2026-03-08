import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ctrader.com_mgt', ['https://ctrader.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
