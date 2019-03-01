var self = this;

self.main = function() {
    self.init();

}

self.init = function() {
    self.initPosition();

}

window.onload = function() {
    $("img").show();

    var titleHeight = $("h1").outerHeight(true);
    var instImageHeight = $(".groundswell_inst").find("img")[0].clientHeight;
    $(".groundswell_inst").css({ "top": titleHeight });
    $(".groundswell_album").css({ "top": titleHeight + instImageHeight });

    var albumImageHeight = $(".groundswell_album").find("img")[0].clientHeight;
    $("#credits").css({ "top": titleHeight + instImageHeight + albumImageHeight });
}