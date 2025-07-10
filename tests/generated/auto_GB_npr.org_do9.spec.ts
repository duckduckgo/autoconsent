import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_npr.org_do9', ['https://www.npr.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
