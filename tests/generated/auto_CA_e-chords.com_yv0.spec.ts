import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_e-chords.com_yv0', ['https://www.e-chords.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
