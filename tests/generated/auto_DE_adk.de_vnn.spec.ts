import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adk.de_vnn', ['https://adk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
