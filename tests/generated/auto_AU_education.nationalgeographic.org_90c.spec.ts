import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_education.nationalgeographic.org_90c', ['https://education.nationalgeographic.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
