import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coulingsewingmachines.co.uk_8sz', ['https://coulingsewingmachines.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
