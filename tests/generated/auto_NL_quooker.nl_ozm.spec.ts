import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_quooker.nl_ozm', ['https://www.quooker.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
