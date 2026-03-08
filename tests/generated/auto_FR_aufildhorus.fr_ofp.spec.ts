import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aufildhorus.fr_ofp', ['https://aufildhorus.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
