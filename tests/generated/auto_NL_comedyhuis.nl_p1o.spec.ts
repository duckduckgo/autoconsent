import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_comedyhuis.nl_p1o', ['https://comedyhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
