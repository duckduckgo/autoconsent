import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_interiale.fr_dyj', ['https://www.interiale.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
