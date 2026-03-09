import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_perkuptracking.aftership.com_vch',
    [
        'https://perkuptracking.aftership.com/1LSCYM0000QZ1A0?_sc_p=lid%3A6b94c66860c4f385ed243abdda741794%2Aseg%3Aaftership-tracking_out_for_delivery_to_customer-am_trace_id%3Dcd34b99b2d66061244e5c67c6294e765%2F0-section_id%3Dorder_tracking%2Amdm%3Asms',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
