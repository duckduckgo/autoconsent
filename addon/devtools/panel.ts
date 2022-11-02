import { ReportResponseMessage } from "../../lib/messages";

type DevtoolsAuditMessage = ReportResponseMessage & { tabId: number, frameId: number }
type InstanceTerminatedMessage = {
    type: 'instanceTerminated';
    tabId: number;
    instanceId: string;
}

function getRowForInstance(instanceId: string) {
    const rowId = `instance-${instanceId}`;
    if (document.getElementById(rowId) !== null) {
        // update existing row
        const td = document.getElementById(rowId).querySelectorAll('td');
        return td;
    } else {
        const template : HTMLTemplateElement = document.querySelector('#row');
        const table = document.querySelector('tbody');
        const clone = template.content.cloneNode(true) as HTMLElement;
        const td = clone.querySelectorAll('td');
        table.appendChild(clone);
        table.lastElementChild.id = rowId;
        return td;
    }
}

function reconnect(): chrome.runtime.Port {
    const backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-panel"
    });

    backgroundPageConnection.onMessage.addListener(function (message: DevtoolsAuditMessage | InstanceTerminatedMessage) {
        if (message.type === 'reportResponse') {
            const td = getRowForInstance(message.instanceId);
            td[0].innerText = `${message.frameId}`;
            td[1].innerText = message.url;
            td[2].innerText = message.state.lifecycle
            td[3].innerText = message.state.prehideOn ? 'yes' : 'no'
            td[4].innerText = `${message.state.findCmpAttempts}`;
            td[5].innerText = message.state.detectedCmps.join(', ');
            td[6].innerText = message.state.detectedPopups.join(', ');
        } else if (message.type === 'instanceTerminated') {
            document.getElementById(`instance-${message.instanceId}`).classList.add('dead')
        }
    });
    
    // Relay the tab ID to the background page
    const pollInterval = setInterval(() => {
        backgroundPageConnection.postMessage({
            type: 'report',
            tabId: chrome.devtools.inspectedWindow.tabId,
        });
    }, 500);
    
    backgroundPageConnection.onDisconnect.addListener(() => {
        clearInterval(pollInterval);
        reconnect();
    });

    return backgroundPageConnection;
}

reconnect().postMessage({
    type: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId,
})
