import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_accio.com_z8a', ['https://www.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
