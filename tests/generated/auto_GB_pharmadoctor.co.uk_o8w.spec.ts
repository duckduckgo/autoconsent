import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pharmadoctor.co.uk_o8w', ['https://pharmadoctor.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
