import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_langfuse.com_w3v', ['https://langfuse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
