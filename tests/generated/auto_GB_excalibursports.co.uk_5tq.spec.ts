import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_excalibursports.co.uk_5tq', ['https://excalibursports.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
