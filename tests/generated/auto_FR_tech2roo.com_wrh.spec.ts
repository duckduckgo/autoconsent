import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tech2roo.com_wrh', ['https://www.tech2roo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
