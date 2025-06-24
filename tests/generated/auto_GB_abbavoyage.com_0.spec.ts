import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_abbavoyage.com_0', ['https://abbavoyage.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
