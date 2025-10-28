import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_legal500.com_ny4', ['https://www.legal500.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
