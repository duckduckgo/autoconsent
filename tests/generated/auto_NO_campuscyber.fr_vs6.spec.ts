import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_campuscyber.fr_vs6', ['https://campuscyber.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
