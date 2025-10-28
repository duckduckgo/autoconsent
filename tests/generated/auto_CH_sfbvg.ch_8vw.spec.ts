import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sfbvg.ch_8vw', ['https://sfbvg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
