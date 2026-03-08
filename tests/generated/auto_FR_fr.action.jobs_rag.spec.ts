import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.action.jobs_rag', ['https://fr.action.jobs/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
