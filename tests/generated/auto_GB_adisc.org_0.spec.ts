import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adisc.org_0', ['https://www.adisc.org/forum/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
