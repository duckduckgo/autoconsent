import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cafepolitico.com.co_gsd', ['https://cafepolitico.com.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
