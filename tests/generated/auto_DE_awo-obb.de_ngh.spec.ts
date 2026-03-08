import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_awo-obb.de_ngh', ['https://awo-obb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
