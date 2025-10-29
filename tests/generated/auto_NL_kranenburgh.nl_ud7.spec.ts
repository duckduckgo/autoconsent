import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kranenburgh.nl_ud7', ['https://kranenburgh.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
