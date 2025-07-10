import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_atptour.com_c5l', ['https://www.atptour.com/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
