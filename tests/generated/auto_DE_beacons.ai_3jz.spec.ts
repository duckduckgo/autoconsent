import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beacons.ai_3jz', ['https://beacons.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
