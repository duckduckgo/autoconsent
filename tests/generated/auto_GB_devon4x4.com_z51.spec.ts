import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_devon4x4.com_z51', ['https://devon4x4.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
