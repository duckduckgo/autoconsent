import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adisc.org_h06', ['https://www.adisc.org/forum/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
