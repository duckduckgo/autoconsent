import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aseicam.com_5hd', ['https://aseicam.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
