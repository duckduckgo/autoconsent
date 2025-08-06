import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_limburg.nl_kcv', ['https://www.limburg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
