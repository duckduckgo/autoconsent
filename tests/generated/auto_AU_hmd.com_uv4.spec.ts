import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hmd.com_uv4', ['https://www.hmd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
