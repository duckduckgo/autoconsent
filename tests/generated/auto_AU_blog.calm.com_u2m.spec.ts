import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_blog.calm.com_u2m', ['https://blog.calm.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
