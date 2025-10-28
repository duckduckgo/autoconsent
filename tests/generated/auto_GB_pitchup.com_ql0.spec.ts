import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pitchup.com_ql0', ['https://www.pitchup.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
