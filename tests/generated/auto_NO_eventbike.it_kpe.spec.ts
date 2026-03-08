import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eventbike.it_kpe', ['https://eventbike.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
