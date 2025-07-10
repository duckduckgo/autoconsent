import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_echa.europa.eu_2ih', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
