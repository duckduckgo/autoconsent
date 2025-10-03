import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_goteborg.com_q7v', ['https://www.goteborg.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
