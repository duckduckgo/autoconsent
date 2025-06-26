import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_oracle.com_ey7', ['https://www.oracle.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
