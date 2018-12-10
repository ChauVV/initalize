1. yarn global add prettier
2. Add vscode TSlint
3. ``cmd + shift + p`` -> search user settings and add follows:
```
{
    "workbench.iconTheme": "vscode-icons",
    "window.zoomLevel": -1,
    "typescript.autoImportSuggestions.enabled": false,
    "editor.fontSize": 14,
    "eslint.autoFixOnSave": true,
    "editor.tabSize": 2,
    "editor.minimap.enabled": false,
    "editor.lineNumbers": "on",
    "javascript.updateImportsOnFileMove.enabled": "never",
    "explorer.confirmDelete": false,
    "tslint.alwaysShowStatus": true,
    "tslint.autoFixOnSave": true,
    // Set the default
    "editor.formatOnSave": true,
    // Enable per-language
    "[javascript]": {
        "editor.formatOnSave": true
    }
}
```
4. More info at: [Configure TypeScript, TSLint, and Prettier in VS Code for React Native Development](https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2)
.
+-- A
+-- B
|   +-- C
|   +-- D
+-- E
