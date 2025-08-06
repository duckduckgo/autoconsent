import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_krys.com_7h0', ['https://www.krys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
