import generateCMPTests from '../playwright/runner';

generateCMPTests('amazonforum', [
    'https://uk.amazonforum.com/',
    'https://de.amazonforum.com/',
    'https://fr.amazonforum.com/',
    'https://it.amazonforum.com/',
    'https://es.amazonforum.com/',
]);
