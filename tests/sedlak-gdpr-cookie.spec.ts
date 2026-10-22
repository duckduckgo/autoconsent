import generateCMPTests from '../playwright/runner';

generateCMPTests('sedlak-gdpr-cookie', ['https://wynagrodzenia.pl/', 'https://sedlak.pl/', 'https://rynekpracy.pl/']);

// these sites reload immediately after the click, before the self-test can run
generateCMPTests('sedlak-gdpr-cookie', ['https://sygnaapp.pl/', 'https://zeta.pl/'], { testSelfTest: false });
