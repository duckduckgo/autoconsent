import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wibra.nl_jss', ['https://www.wibra.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
