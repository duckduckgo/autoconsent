import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_utwente.nl_zhm', ['https://www.utwente.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
