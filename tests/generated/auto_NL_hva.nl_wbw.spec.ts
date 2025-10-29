import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hva.nl_wbw', ['https://www.hva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
