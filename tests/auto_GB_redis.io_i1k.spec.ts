import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_redis.io_i1k', ['https://redis.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
