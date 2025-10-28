import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fritzbox24.de_h3i', ['https://fritzbox24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
