import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_foundryvtt.com_4kp', ['https://foundryvtt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
