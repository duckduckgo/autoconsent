import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_autoterm.store_y9i', ['https://autoterm.store/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
