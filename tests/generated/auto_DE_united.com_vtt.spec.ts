import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_united.com_vtt', ['https://www.united.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
