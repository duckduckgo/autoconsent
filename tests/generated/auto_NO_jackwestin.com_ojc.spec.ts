import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jackwestin.com_ojc', ['https://jackwestin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
