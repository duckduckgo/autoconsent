import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_milvus.io_j4n', ['https://milvus.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
