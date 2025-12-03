import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123inkt.nl_4nc', ['https://www.123inkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
