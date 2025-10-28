import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erstbezug.ch_zdz', ['https://www.erstbezug.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
