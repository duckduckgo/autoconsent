import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_coffeegeek.co_ygz', ['https://coffeegeek.co/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
