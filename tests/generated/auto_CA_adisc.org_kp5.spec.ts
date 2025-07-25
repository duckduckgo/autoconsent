import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_adisc.org_kp5', ['https://www.adisc.org/forum/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
