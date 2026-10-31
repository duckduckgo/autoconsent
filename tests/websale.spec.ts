import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'websale',
    [
        'https://de.personalshop.com/',
        'https://personalshop.ch/',
        'https://kotte-zeller.de/',
        'https://beckmann-kg.de/',
        'https://gartenversandhaus.de/',
        'https://goldhahn.de/',
        'https://leaf-schmuck.de/',
        'https://krueger-kleidung.de/',
    ],
    { testSelfTest: false },
);
