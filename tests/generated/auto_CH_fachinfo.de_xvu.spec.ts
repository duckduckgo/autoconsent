import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fachinfo.de_xvu', ['https://www.fachinfo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
