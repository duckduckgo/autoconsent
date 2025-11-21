import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kika.nl_199', ['https://kika.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
