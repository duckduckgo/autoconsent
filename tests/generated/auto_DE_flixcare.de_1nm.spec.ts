import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_flixcare.de_1nm', ['https://flixcare.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
