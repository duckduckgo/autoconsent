import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dondon.media_kdw', ['https://dondon.media/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
