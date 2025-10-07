import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitbox.swiss_yoi', ['https://bitbox.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
