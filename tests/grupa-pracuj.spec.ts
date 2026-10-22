import generateCMPTests from '../playwright/runner';

generateCMPTests('grupa-pracuj', ['https://www.pracuj.pl/', 'https://pracodawcy.pracuj.pl/']);

// these sites reload the page after saving consent (or store it without the cp_* cookies), so the self-test cannot run
generateCMPTests('grupa-pracuj', ['https://zarobki.pracuj.pl/', 'https://grupapracuj.pl/', 'https://theprotocol.it/'], {
    testSelfTest: false,
});
