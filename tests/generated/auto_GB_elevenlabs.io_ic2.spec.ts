import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_elevenlabs.io_ic2', ['https://elevenlabs.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
