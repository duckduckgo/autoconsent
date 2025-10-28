import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_odin.nl_uh6', ['https://www.odin.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
