import generateCMPTests from '../playwright/runner';

// the consent variant reloads the page after confirming, which interrupts the self-test
generateCMPTests('eboxx', ['https://www.dq-solutions.ch/', 'https://xoo.cc/', 'https://mcshark.at/', 'https://bunzl.co.at/'], {
    testSelfTest: false,
});
