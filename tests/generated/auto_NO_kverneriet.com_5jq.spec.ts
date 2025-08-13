import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kverneriet.com_5jq', ['https://kverneriet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
