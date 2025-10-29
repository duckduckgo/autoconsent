import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theiet.org_0', ['https://www.theiet.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
