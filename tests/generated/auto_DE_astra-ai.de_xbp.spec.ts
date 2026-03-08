import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_astra-ai.de_xbp', ['https://astra-ai.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
