import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_postman.com_yvc', ['https://www.postman.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
