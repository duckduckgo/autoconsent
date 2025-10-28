import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_osmaps.com_9pk', ['https://osmaps.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
