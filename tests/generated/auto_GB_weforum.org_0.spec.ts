import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_weforum.org_0', ['https://www.weforum.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
