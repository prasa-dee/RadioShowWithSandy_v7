$( document ).ready(function() {
    var song = document.getElementsByTagName('audio')[0];
    song.load();
});
$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceOgg = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

		sourceMp3.src = 'http://stream.zeno.fm/xgbp8psnzk0uv';

/**        sourceOgg.src = 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.ogg';
			sourceMp3.src = 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a'; **/

    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else song.pause();
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-pause fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-pause fa-lg beat');
    });
    song.addEventListener('ended', function () {
        song.pause();
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });
});