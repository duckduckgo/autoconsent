import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_foundryvtt.com_2jv', ['https://foundryvtt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
