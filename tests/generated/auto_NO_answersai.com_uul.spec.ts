import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_answersai.com_uul', ['https://answersai.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
