import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_arganwinkel.nl_eua', ['https://arganwinkel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
