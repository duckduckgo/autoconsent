import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anil.org_9og', ['https://www.anil.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
