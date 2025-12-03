import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_efarma.nl_xbs', ['https://www.efarma.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
