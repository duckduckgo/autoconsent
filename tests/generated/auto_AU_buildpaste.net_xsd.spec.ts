import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_buildpaste.net_xsd', ['https://buildpaste.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
