import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gmc-uk.org_0', ['https://www.gmc-uk.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
