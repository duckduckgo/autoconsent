import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ohme-ev.com_15v', ['https://ohme-ev.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
