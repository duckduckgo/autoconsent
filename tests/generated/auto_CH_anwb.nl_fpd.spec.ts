import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anwb.nl_fpd', ['https://www.anwb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
