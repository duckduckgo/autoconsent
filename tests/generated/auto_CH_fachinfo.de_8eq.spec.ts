import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fachinfo.de_8eq', ['https://www.fachinfo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
