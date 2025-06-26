import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_elevenlabs.io_tzm', ['https://elevenlabs.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
