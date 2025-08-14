import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_e-chords.com_087', ['https://www.e-chords.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
