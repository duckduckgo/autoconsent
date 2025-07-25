import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gapph.nl_6lp', ['https://www.gapph.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
