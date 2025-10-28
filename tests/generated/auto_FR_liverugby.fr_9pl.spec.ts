import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_liverugby.fr_9pl', ['https://www.liverugby.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
