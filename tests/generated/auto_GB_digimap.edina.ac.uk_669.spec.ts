import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_digimap.edina.ac.uk_669', ['https://digimap.edina.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
