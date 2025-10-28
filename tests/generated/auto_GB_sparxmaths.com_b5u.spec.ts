import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sparxmaths.com_b5u', ['https://sparxmaths.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
