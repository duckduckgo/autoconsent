import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoref.eu_r88', ['https://autoref.eu/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
