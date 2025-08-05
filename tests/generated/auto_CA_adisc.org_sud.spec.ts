import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_adisc.org_sud', ['https://www.adisc.org/forum/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
