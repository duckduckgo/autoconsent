import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_arthurbanana.com_b24', ['https://arthurbanana.com/arthur-banana/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
