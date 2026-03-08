import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cashwiseai.com_958', ['https://cashwiseai.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
