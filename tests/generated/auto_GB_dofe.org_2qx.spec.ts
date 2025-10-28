import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dofe.org_2qx', ['https://www.dofe.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
