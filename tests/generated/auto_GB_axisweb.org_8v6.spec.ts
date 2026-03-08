import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_axisweb.org_8v6', ['https://axisweb.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
