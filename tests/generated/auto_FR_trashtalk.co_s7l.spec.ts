import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_trashtalk.co_s7l', ['https://trashtalk.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
