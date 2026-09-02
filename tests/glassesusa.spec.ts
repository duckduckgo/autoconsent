import generateCMPTests from '../playwright/runner';

generateCMPTests('glassesusa', ['https://www.glassesusa.com/', 'https://www.glassesusa.com/soccer-glasses'], {
    testOptIn: false,
});

generateCMPTests('glassesusa', ['https://www.glassesusa.com/soccer-glasses'], {
    testOptIn: false,
    mobile: true,
});
