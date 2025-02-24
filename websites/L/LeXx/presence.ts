const presence = new Presence({
		clientId: "393887855274885121",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
	const presenceData: PresenceData = {
		largeImageKey: "lexx",
		startTimestamp: browsingTimestamp,
	};

	switch (document.location.hostname) {
		case "lexx.app": {
			if (document.location.pathname === "/")
				presenceData.details = "Viewing the homepage";
			else if (document.location.pathname.includes("/legal")) {
				presenceData.details = "Viewing the legal notice";
				presenceData.smallImageKey = "reading";
			} else if (document.location.pathname.includes("/privacy")) {
				presenceData.details = "Viewing the privacy policy";
				presenceData.smallImageKey = "reading";
			} else if (document.location.pathname.includes("/premium")) {
				presenceData.details = "Reading about premium";
				presenceData.smallImageKey = "reading";
			} else if (document.location.pathname.includes("/login")) {
				presenceData.details = "Logging in";
				presenceData.smallImageKey = "writing";
			} else if (document.location.pathname.endsWith("/events")) {
				presenceData.details = "Editing some events";
				presenceData.smallImageKey = "writing";
			} else if (
				!document.location.pathname.endsWith("/events") &&
				document.location.pathname.includes("/")
			) {
				presenceData.details = "Viewing the dashboard";
				presenceData.smallImageKey = "writing";
			} else if (document.location.pathname !== "/")
				presenceData.details = "Viewing the homepage";

			break;
		}
		case "beta.lexx.app": {
			presenceData.details = "Viewing the beta page";
			break;
		}
		case "alpha.lexx.app": {
			presenceData.details = "Viewing the alpha page";
			break;
		}
		case "dev.lexx.app": {
			presenceData.details = "Viewing the development page";
			break;
		}
		case "status.lexx.app":
			{
				presenceData.details = "Viewing the status page";
				// No default
			}
			break;
	}

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
