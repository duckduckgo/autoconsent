import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thyroiduk.org_ekf', ['https://thyroiduk.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
