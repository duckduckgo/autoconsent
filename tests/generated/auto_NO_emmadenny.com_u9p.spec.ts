import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_emmadenny.com_u9p', ['https://emmadenny.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
