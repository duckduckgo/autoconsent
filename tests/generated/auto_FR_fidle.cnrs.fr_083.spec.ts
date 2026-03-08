import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fidle.cnrs.fr_083', ['https://fidle.cnrs.fr/w3/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
