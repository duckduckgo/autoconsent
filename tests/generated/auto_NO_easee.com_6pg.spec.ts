import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_easee.com_6pg', ['https://easee.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
