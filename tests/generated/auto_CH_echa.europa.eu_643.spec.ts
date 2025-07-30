import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_echa.europa.eu_643', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
