import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_altilia.nl_njn', ['https://altilia.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
