import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_port.ac.uk_6um', ['https://www.port.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
