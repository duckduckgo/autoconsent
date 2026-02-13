import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_darlink.ai_odw', ['https://darlink.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
