import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_300.ya.ru_gam', ['https://300.ya.ru/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
