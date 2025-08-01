import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.pornhub.org_7ua', ['https://fr.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
