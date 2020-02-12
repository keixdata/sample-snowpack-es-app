#!/bin/bash
# This patch is needed because blueprint assumes we run this script on the server or via webpack using a process-like API
# we don't have on the browser.
echo "Applying Blueprint Process Patch"
sed -i.bak 's/process.env.BLUEPRINT_NAMESPACE || process.env.REACT_APP_BLUEPRINT_NAMESPACE || //g' ./web_modules/@blueprintjs/core.js
