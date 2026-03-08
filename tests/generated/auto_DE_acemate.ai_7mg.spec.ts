import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_acemate.ai_7mg', ['https://acemate.ai/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
