import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_beacons.ai_avw', ['https://beacons.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
