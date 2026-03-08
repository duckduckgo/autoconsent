import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eige.europa.eu_2sc', ['https://eige.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
