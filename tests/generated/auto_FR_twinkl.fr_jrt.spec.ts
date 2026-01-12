import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_twinkl.fr_jrt', ['https://www.twinkl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
