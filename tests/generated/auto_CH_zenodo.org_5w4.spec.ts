import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zenodo.org_5w4', ['https://zenodo.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
