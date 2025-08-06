import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.trip.com_ip2', ['https://fr.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
