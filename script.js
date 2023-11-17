//your JS code here. If required.
const browserInfoDiv = document.getElementById('browser-info');

    // Retrieve browser information from the navigator object
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;

    // Display the browser information in the div
    browserInfoDiv.innerText = "You are using " + browserName + " version " + browserVersion;