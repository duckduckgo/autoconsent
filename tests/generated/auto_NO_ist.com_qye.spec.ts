import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ist.com_qye', ['https://www.ist.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
