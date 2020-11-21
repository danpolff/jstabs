// Task #2
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
         hash: a.hash.replace('#',''), hostname: a.hostname, pathname: a.pathname
    };
}
