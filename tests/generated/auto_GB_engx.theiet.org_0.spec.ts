import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_engx.theiet.org_0', ['https://engx.theiet.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
