import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eumofa.eu_qk5', ['https://eumofa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
