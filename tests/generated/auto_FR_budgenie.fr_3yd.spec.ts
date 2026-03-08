import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_budgenie.fr_3yd', ['https://budgenie.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
