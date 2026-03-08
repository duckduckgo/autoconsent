import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klickahem.se_qc7', ['http://www.klickahem.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
