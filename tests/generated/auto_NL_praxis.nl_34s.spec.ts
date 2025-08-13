import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_praxis.nl_34s', ['https://www.praxis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
