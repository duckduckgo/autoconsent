import generateCMPTests from '../playwright/runner';

// opting out reloads the page, which interrupts the self-test
generateCMPTests(
    'cz-eshop-cookies-consent',
    ['https://www.plastikovy-model.cz/', 'https://www.mps-nabytek.cz/', 'https://www.ohnostroje-cbs.cz/'],
    {
        testSelfTest: false,
    },
);
