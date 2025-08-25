import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mumc.nl_brj', ['https://www.mumc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
