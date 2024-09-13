export const isMobileDevice = () => {
    const userAgent = navigator.userAgent;

    // Regex patterns for mobile user agents
    const mobileAgents = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
        /Opera Mini/i,
        /IEMobile/i,
    ];

    // Check if the userAgent matches any of the mobile patterns
    return mobileAgents.some((mobileAgent) => mobileAgent.test(userAgent));
};
