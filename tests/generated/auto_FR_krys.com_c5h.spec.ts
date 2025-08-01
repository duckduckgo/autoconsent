import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_krys.com_c5h', ['https://www.krys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
