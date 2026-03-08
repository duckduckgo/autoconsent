import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_denver.eu_zwu', ['https://denver.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
