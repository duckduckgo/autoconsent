import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pastaweb.de_gdx', ['https://pastaweb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
