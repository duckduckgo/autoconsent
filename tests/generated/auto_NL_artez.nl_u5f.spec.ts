import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_artez.nl_u5f', ['https://www.artez.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
