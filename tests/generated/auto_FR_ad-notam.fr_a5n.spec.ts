import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ad-notam.fr_a5n', ['https://www.ad-notam.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
