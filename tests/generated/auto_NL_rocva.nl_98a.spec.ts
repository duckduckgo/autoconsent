import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rocva.nl_98a', ['https://www.rocva.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
