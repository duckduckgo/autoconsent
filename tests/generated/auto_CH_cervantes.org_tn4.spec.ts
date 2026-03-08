import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cervantes.org_tn4', ['https://cervantes.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
