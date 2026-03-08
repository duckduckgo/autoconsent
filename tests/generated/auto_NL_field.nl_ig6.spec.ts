import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_field.nl_ig6', ['https://field.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
