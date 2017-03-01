function closeLoad() {
    $(".loading-logo,.spinner-container").fadeOut(300);
    setTimeout(function() {$("#loading").css({"bottom":"100%"});},500);
    setTimeout(function() {$("#loading").css({"display":"none"});},800);
}