import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_famispy.com_jlu', ['https://famispy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
