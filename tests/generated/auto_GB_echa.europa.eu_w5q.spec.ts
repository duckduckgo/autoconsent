import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_echa.europa.eu_w5q', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
