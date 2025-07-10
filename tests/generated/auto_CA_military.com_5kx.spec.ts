import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_military.com_5kx', ['https://www.military.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
