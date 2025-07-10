import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_playboy.com_psf', ['https://www.playboy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
