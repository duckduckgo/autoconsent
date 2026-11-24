import generateCMPTests from '../playwright/runner';

generateCMPTests('ixo-cookie-prompt', ['https://www.castlecameras.co.uk/', 'https://www.tripp.co.uk/']);

// the page reloads right after opt-out, which interrupts the self-test
generateCMPTests('ixo-cookie-prompt', ['https://www.riflemanfirearms.co.uk/'], {
    testSelfTest: false,
});
