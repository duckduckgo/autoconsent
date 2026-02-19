import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ing.com_ehh', ['https://ing.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
