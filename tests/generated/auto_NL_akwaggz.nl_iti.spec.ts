import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_akwaggz.nl_iti', ['https://akwaggz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
