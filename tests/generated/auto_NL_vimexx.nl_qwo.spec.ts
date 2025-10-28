import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vimexx.nl_qwo', ['https://www.vimexx.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
