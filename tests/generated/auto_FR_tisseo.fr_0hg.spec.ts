import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tisseo.fr_0hg', ['https://www.tisseo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
