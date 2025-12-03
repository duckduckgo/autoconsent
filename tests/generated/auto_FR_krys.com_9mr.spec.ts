import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_krys.com_9mr', ['https://www.krys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
