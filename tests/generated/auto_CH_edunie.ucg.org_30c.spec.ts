import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edunie.ucg.org_30c', ['https://edunie.ucg.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
