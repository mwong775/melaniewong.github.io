var queue = new createjs.LoadQueue(),
  $state = $("#state"),
  $progress = $("#progress"),
  $progressbar = $("#progressbar .bar");

queue.on("complete", onComplete);
queue.on("progress", onProgress);

queue.loadManifest([
  {
    id: "1",
    src:
      "images/home/home_top_bg.png"
  }
]);

function onComplete(event) {
  $progressbar.addClass("complete");
  $('.preload_page').hide();
  $('html').css('overflow-y','scroll');
  $('.content').css('opacity','1');
  $( ".showall" ).click();
}

function onProgress(event) {
  var progress = Math.round(event.loaded * 100);

  // console.log("General progress", Math.round(event.loaded) * 100, event);
  $progress.text(progress + "%");
  $progressbar.css({
    width: progress + "%"
  });
}
