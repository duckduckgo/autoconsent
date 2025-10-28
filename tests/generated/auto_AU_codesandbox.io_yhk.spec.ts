import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_codesandbox.io_yhk', ['https://codesandbox.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
