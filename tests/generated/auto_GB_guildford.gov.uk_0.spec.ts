import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_guildford.gov.uk_0', ['https://www.guildford.gov.uk/?ccp=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
