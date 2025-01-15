document.addEventListener('DOMContentLoaded', () => {
    // ... (Lock screen logic - same as before)

    function createWindow(appName, appURL) {
        // ... (Window creation logic - same as before)

        const taskbarApp = document.createElement('button');
        taskbarApp.textContent = appName;
        taskbarApp.className = 'taskbar-app';
        taskbarApp.addEventListener('click', () => {
          const windows = document.querySelectorAll('.window');
          windows.forEach(win => win.style.zIndex = 1);
          newWindow.style.zIndex = 2;
        });
        taskbar.appendChild(taskbarApp);
        return newWindow;
    }

    function makeDraggable(element) { /* ... (same as before) */ }

    function launchApp(appName) {
        let appURL = `apps/${appName.toLowerCase()}/${appName.toLowerCase()}.html`;
        createWindow(appName, appURL);
    }

    launchApp('TextEditor');
    launchApp('About');
    launchApp('Clock');
    launchApp('FileExplorer');
    launchApp('Browser');
});
