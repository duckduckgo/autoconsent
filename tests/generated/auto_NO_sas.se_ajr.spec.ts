import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sas.se_ajr', ['https://www.sas.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
