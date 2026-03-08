import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_de-ree.nl_clx', ['https://de-ree.nl/en/home-en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
