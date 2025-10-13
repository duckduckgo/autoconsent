import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dofe.org_0', ['https://www.dofe.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
