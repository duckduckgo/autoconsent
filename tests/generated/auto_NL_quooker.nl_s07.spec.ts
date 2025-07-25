import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_quooker.nl_s07', ['https://www.quooker.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
