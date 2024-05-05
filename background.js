let pattern = "https://www.youtube.com/shorts/*"

function changeURL(requestDetails){
    console.log(`Changing to a regular video`);
    let url = new URL (requestDetails.url);
    let videoId = url.pathname.split("/").pop();
    console.log("Extracted video ID:", videoId);
    // Redirecting to the regular video URL
    let redirectUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log("Redirect URL:", redirectUrl);
    return { redirectUrl };
}

console.log("working");

browser.webRequest.onBeforeRequest.addListener(
    changeURL,
    { urls: [pattern]},
    ["blocking"],
   );
