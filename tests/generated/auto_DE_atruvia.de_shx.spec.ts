import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_atruvia.de_shx', ['https://atruvia.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
