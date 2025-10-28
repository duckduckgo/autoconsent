import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_napkin.ai_5jz', ['https://www.napkin.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
