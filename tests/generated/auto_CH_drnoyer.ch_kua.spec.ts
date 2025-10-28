import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_drnoyer.ch_kua', ['https://www.drnoyer.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
