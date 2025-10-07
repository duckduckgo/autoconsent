import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_odido.nl_32v', ['https://www.odido.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
