import generateCMPTests from '../playwright/runner';
generateCMPTests('fullertonhotels.com', ['https://www.fullertonhotels.com/', 'https://www.falkensteiner.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});

// older Secure Privacy banner template without button ids (evSpRejectBtn / evSpAcceptBtn classes)
generateCMPTests('fullertonhotels.com', ['https://www.fireangel.co.uk/', 'https://www.scholastic.co.uk/', 'https://doorbraak.be/'], {
    testSelfTest: false,
});
