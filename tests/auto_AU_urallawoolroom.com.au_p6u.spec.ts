import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_urallawoolroom.com.au_p6u', ['https://www.urallawoolroom.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
