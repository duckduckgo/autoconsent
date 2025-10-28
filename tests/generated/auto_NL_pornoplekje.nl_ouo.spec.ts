import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pornoplekje.nl_ouo', ['https://pornoplekje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
