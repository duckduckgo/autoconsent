import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_elorcana.com_ysk', ['https://elorcana.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
