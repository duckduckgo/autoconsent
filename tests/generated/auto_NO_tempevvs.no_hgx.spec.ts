import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tempevvs.no_hgx', ['https://www.tempevvs.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
