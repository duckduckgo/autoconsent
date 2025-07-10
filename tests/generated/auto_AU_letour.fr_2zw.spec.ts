import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_letour.fr_2zw', ['https://www.letour.fr/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
