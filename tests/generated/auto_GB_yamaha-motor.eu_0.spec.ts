import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yamaha-motor.eu_0', ['https://www.yamaha-motor.eu/gb/en/home/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
