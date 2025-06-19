import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_pixelcut.ai_18l', ['https://www.pixelcut.ai/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
