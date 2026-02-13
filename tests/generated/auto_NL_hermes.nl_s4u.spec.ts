import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hermes.nl_s4u', ['https://www.hermes.nl/nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
