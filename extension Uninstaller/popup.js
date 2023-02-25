// document.getElementById("uninstallButton").addEventListener("click", function() {
//     var extensionIds = document.getElementById("extensionIds").value.split("\n");
//     extensionIds.forEach(function(extensionId) {
//         chrome.management.uninstall(extensionId.trim(), {}, function() {
//             alert("Extension with id '" + extensionId + "' has been uninstalled.");
//             window.close();
//         });
//     });
// });

document.getElementById("uninstallButton").addEventListener("click", function() {
    var extensionIds = document.getElementById("extensionIds").value;
    extensionIds = extensionIds.split("\n");
    chrome.runtime.sendMessage({ extensionIds: extensionIds });
});