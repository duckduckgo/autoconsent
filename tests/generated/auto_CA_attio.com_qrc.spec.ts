import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_attio.com_qrc', ['https://attio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
