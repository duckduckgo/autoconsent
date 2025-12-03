import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eerlijketen.nl_z27', ['https://eerlijketen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
