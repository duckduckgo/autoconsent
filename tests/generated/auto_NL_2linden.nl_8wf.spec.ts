import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_2linden.nl_8wf', ['https://2linden.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
