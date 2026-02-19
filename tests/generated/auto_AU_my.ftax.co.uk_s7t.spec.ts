import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_my.ftax.co.uk_s7t', ['https://my.ftax.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
