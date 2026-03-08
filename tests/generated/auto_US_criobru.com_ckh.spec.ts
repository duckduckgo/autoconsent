import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_criobru.com_ckh', ['https://criobru.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
