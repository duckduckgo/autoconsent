import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_redis.io_k1u', ['https://redis.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
