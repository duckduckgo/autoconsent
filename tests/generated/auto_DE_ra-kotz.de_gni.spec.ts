import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ra-kotz.de_gni', ['https://www.ra-kotz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
