import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_abrsm.org_rx3', ['https://www.abrsm.org/en-gb'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
