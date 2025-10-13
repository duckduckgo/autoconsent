import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wjec.co.uk_0', ['https://www.wjec.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
