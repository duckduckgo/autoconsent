import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_link.aps.org_9u0', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
