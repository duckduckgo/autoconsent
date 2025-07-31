import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_vrsmash.com_fg7',
    [
        'https://www.vrsmash.com/?link_data=eyJvZmZlcl9pZCI6IjI2IiwiYWZmX2lkIjoiODYiLCJjYW1wYWlnbl9pZCI6IjI3NDAiLCJsaW5rX2lkIjoiMzE1ODMiLCJjbGlja19pZCI6IjlkMGU3YzNiLTk5ZWItNDM4Mi1hZTI5LWZmYWZjYTc5YjNlYyIsImNyZWF0aXZlX2lkIjoiODEiLCJ0eXBlIjoibGFuZGluZyJ9',
    ],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] },
);
