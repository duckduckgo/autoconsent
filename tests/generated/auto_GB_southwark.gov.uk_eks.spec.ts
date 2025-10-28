import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southwark.gov.uk_eks', ['https://www.southwark.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
