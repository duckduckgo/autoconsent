import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pitchero.com_fxv', ['https://www.pitchero.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
