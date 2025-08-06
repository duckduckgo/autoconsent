import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123inkt.nl_n2f', ['https://www.123inkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
