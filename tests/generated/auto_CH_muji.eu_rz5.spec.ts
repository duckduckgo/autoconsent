import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_muji.eu_rz5', ['https://www.muji.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
