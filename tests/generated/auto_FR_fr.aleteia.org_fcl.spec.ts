import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.aleteia.org_fcl', ['https://fr.aleteia.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
