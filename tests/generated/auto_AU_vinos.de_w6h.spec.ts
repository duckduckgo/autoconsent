import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_vinos.de_w6h', ['https://www.vinos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
