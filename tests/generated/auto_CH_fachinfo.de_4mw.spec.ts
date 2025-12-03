import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fachinfo.de_4mw', ['https://www.fachinfo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
