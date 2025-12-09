import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_3cx.com_knn', ['https://www.3cx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
