import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_echa.europa.eu_lgx', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
