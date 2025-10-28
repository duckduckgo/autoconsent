import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pubs.aip.org_l8q', ['https://pubs.aip.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
