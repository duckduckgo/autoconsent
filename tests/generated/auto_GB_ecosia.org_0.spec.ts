import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ecosia.org_0', ['https://www.ecosia.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
