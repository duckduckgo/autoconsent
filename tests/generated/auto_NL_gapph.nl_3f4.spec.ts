import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gapph.nl_3f4', ['https://www.gapph.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
