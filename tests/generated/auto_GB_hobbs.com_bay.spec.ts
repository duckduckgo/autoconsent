import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hobbs.com_bay', ['https://www.hobbs.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
