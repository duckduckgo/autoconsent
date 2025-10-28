import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pbs.org_r1j', ['https://www.pbs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
