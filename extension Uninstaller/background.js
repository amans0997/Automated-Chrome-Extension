chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.extensionIds) {
        chrome.management.getAll(function(extensions) {
            var restrictedExtensionsArray = request.extensionIds;
            for (var i = 0; i < extensions.length; i++) {
                var ext = extensions[i];
                if (restrictedExtensionsArray.includes(ext.id) && ext.enabled) {
                    chrome.management.uninstall(ext.id);
                }
            }
        });
    }
});