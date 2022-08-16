import generateCMPTests from "../playwright/runner";

generateCMPTests('WP Cookie Notice for GDPR', [
    'https://veryceleb.com/',
    'https://nysba.org/',
    // 'https://www.independentsentinel.com/', // appears only on user iteraction
], {}
);
