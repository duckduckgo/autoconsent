import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airportmap.de_zr5', ['https://airportmap.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
