import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coodem.coop_es9', ['https://coodem.coop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
