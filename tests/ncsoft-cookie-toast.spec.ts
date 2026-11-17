import generateCMPTests from '../playwright/runner';

// The page reloads after a choice is made, which can interrupt the self-test.
generateCMPTests('ncsoft-cookie-toast', ['https://aion2.plaync.com/', 'https://cinder-city.com/', 'https://bns.plaync.com/'], {
    testSelfTest: false,
});
