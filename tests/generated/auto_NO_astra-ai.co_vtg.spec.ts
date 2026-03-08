import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_astra-ai.co_vtg', ['https://astra-ai.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
