import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gl-inet.com_ti6', ['https://www.gl-inet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
