import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zenodo.org_plx', ['https://zenodo.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
