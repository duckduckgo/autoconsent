import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_everycred.com_rdv', ['https://everycred.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
