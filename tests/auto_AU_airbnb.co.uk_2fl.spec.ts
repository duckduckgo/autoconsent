import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_airbnb.co.uk_2fl', ['https://www.airbnb.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
