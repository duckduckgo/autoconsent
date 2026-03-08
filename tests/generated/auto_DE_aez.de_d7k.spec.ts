import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aez.de_d7k', ['https://aez.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
