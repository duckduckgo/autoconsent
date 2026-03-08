import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agentmajeur.fr_hj9', ['https://agentmajeur.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
