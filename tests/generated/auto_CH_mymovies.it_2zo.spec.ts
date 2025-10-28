import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mymovies.it_2zo', ['https://www.mymovies.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
