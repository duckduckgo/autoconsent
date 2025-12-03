import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_xhamster.desi_3w0', ['https://xhamster.desi/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
