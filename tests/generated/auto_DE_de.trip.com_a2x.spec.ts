import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.trip.com_a2x', ['https://de.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
