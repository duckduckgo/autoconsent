import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tibber.com_6o5', ['https://tibber.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
