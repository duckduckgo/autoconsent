import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_furtmayrs.de_gc3', ['https://www.furtmayrs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
