import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_esure.com_p1z', ['https://www.esure.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
