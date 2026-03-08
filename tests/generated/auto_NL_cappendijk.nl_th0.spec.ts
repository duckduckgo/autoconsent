import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cappendijk.nl_th0', ['https://cappendijk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
