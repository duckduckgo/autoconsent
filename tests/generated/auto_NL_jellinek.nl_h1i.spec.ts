import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jellinek.nl_h1i', ['https://www.jellinek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
