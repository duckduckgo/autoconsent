import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_embassytheatre.co.uk_x3a', ['https://embassytheatre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
