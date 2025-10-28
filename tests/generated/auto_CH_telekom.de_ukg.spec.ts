import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_telekom.de_ukg', ['https://www.telekom.de/start'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
