import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_redis.io_2of', ['https://redis.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
