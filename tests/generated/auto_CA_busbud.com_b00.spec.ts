import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_busbud.com_b00', ['https://www.busbud.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
