import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actufinance.fr_2u0', ['https://actufinance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
