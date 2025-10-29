import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jailbreakchangelogs.xyz_sjt', ['https://jailbreakchangelogs.xyz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
