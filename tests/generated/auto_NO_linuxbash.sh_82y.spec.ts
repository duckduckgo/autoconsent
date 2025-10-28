import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_linuxbash.sh_82y', ['https://www.linuxbash.sh/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
