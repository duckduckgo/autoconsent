import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bilthamber.com_iy3', ['https://bilthamber.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
