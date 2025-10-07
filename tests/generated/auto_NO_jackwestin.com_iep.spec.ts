import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jackwestin.com_iep', ['https://jackwestin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
