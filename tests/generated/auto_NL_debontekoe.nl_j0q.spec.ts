import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debontekoe.nl_j0q', ['https://debontekoe.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
