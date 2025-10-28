import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_boekenbalie.nl_b6h', ['https://boekenbalie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
