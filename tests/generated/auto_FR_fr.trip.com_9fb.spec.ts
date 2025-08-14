import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.trip.com_9fb', ['https://fr.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
