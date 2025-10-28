import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france.muji.eu_vx2', ['https://france.muji.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
