import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'micado',
    [
        // React flavour, modal ("pop-up") layout
        'https://www.kaiserlodge.at/en/',
        'https://www.damuels.at/',
        // React flavour, "slide-up" layout
        'https://www.stanglwirt.com/',
        'https://www.plankenhof.at/',
        // newer flavour, buttons carry their own consent classes
        'https://www.wildkogel-arena.at/',
        // newer flavour, buttons only have generic mco-button classes
        'https://www.kaiserwinkl.com/',
        'https://www.hotel-sonnblick.at/',
    ],
    {},
);
