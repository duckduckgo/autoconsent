import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_epoch.ai_2pl', ['https://epoch.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
