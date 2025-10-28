import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lincraft.com.au_6w0', ['https://lincraft.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
