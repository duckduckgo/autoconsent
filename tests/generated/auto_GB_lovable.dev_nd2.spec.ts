import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lovable.dev_nd2', ['https://lovable.dev/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
