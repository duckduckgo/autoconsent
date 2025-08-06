import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.trip.com_mca', ['https://de.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
