import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jackwestin.com_4p9', ['https://jackwestin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
