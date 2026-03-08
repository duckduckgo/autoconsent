import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_astra-ai.nl_ca5', ['https://astra-ai.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
