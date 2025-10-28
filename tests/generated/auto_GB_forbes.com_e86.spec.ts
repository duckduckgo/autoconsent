import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forbes.com_e86', ['https://www.forbes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
