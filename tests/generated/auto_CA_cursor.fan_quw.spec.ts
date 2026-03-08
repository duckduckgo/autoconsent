import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cursor.fan_quw', ['https://cursor.fan/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
