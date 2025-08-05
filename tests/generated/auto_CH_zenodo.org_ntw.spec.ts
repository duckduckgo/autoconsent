import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zenodo.org_ntw', ['https://zenodo.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
