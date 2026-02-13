import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_busbud.com_0sh', ['https://www.busbud.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
