import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pedicure.nl_z4n', ['https://www.pedicure.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
