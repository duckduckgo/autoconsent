import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ru.redtube.com_ynv', ['https://ru.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
