import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sobusygirls.fr_fa5', ['https://sobusygirls.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
