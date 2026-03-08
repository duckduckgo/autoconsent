import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_at.trip.com_e1w', ['https://at.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
