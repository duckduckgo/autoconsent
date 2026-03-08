import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ean-code.eu_ib4', ['https://ean-code.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
