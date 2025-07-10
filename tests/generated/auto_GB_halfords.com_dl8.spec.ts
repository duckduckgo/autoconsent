import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_halfords.com_dl8', ['https://www.halfords.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
