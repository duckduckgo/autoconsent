import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_belib.paris_rqx', ['https://belib.paris/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
