window.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
    var userInfo = {
        name: event.target.nodeName,
        url: event.target.src,
				height: event.target.height,
				width: event.target.width,
    }
		safari.self.tab.setContextMenuEventUserInfo(event, userInfo);
}