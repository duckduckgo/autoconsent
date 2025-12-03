import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_avanza.se_b5b', ['https://www.avanza.se/start'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
