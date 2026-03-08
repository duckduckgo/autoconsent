import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bisonspoor.nl_mgq', ['https://bisonspoor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
