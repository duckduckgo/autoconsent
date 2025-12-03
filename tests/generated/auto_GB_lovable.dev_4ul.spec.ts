import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lovable.dev_4ul', ['https://lovable.dev/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
