import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcfc.com_0', ['https://www.bcfc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
