import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_sso.greenchoice.nl_vqx',
    [
        'https://sso.greenchoice.nl/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dapp-mijngreenchoice%26redirect_uri%3Dhttps%253A%252F%252Fmijn.greenchoice.nl%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520id%26code_challenge%3DVtFyZbpS39oMRAR31w8aQxBPDCY3Uvq8KLxv7iUcvjk%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638900728335800207.OWU2OTUxYjUtZjgxYS00MDdlLThlYzUtZTI5MmM0MjlkYzAwNThkZjk4NTgtMjYzZi00ZGE3LTgzYWItNjMxYjQ0NDg2ZGIw%26state%3DCfDJ8D4MHbvzVMRJqGg_20O30esCnwBtBC_YqoIxHF9-AyEnV9JtaQKPd4GlkreNeeJ27BFlbNlR6aHRCwRyNOT1uoWzZWqAntblFic0MUkrRcazVXnQ2tO9o8yb5hwlck5XnQ5JmwKlP2z_v5_5I2T_QafVbH4obVeHNFnJ0KowXr86A78tyWLCluI17wU4__uaW3yCv1jaNfZ-2XWLWF2P1C_FW1vPeT4dTn3_ydiYF7YQhQwWj6bWhZs0X4RR9cfIPZGimiuWKD-gV7Dz_E-8kVZOxNucM0OJN0YrdPLicBXVh8cc2qEjQ55QJQCyAUgR32bM6gXrpyNdNwm8aAmmMqMw9nj-BUzSj8mPPc21W0UPCOZxB7XqohIWoLPjoMC2qg%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D8.0.1.0',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
