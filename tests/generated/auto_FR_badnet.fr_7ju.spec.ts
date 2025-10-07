import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_badnet.fr_7ju', ['https://badnet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
