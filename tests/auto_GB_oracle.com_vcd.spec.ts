import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_oracle.com_vcd', ['https://www.oracle.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
