import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_win10.fr_swn', ['https://www.win10.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
