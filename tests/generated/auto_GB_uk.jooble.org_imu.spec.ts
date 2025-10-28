import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.jooble.org_imu', ['https://uk.jooble.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
