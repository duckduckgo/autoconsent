import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcfc.com_1', ['https://www.bcfc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
