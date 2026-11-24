import generateCMPTests from '../playwright/runner';

// the page reloads after saving preferences, so the self-test result is lost
generateCMPTests(
    'webnetism',
    ['https://www.essexhighways.org/', 'https://www.freemantech.co.uk/', 'https://www.spectrummedical.com/', 'https://www.chace.ac.uk/'],
    {
        testSelfTest: false,
    },
);
