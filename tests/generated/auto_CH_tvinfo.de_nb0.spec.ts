import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tvinfo.de_nb0', ['https://www.tvinfo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
