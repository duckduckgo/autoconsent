import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_flosports.tv_au2', ['https://www.flosports.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
