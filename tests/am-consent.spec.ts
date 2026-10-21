import generateCMPTests from '../playwright/runner';

// opt-out reloads the page, so the self-test runs in a fresh content script
generateCMPTests('am-consent', ['https://www.jeune-gay.fr/', 'https://www.twinks.tube/'], { testSelfTest: false });
