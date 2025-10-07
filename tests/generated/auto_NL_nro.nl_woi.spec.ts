import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nro.nl_woi', ['https://www.nro.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
