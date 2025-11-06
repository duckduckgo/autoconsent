import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gizmo.ai_o4m', ['https://gizmo.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
