import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_app.medify.co_bbb', ['https://app.medify.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
