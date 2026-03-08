import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_attmehave.no_kfu', ['https://attmehave.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
