import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_felixxwerkt.nl_v6u', ['https://felixxwerkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
