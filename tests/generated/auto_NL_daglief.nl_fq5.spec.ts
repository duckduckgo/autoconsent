import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_daglief.nl_fq5', ['https://daglief.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
