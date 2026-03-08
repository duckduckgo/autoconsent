import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_essit.nl_j04', ['https://essit.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
