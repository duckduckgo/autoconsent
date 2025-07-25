import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anwb.nl_74p', ['https://www.anwb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
