import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_echa.europa.eu_fxe', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
