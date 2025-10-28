import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ru.nl_bsj', ['https://www.ru.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
