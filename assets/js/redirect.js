function getMobileOperatingSystem() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent))
        return "Windows Phone";

    if (/android/i.test(userAgent))
        return "Android";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        return "iOS";

    return "unknown";
}

function RedirectTo(ios, android, others) {
    let os = getMobileOperatingSystem();
    if (os == "iOS")
        window.location.href = ios;
    else if (os == "Android")
        window.location.href = android;
    else
        window.location.href = others;
}
