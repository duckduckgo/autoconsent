import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_einsundzwei.de_ngc', ['https://einsundzwei.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
