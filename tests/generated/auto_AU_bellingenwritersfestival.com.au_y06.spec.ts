import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bellingenwritersfestival.com.au_y06', ['https://bellingenwritersfestival.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
