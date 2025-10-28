import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gratostel.com_awh', ['https://gratostel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
