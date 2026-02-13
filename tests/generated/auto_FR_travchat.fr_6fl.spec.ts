import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_travchat.fr_6fl', ['https://travchat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
