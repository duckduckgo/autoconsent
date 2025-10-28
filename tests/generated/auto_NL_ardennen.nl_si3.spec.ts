import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ardennen.nl_si3', ['https://ardennen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
