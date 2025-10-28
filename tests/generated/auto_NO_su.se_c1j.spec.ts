import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_su.se_c1j', ['https://www.su.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
