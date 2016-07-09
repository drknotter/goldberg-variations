$(function() {

    $('td>div').click(
        function() {

            $('td>div').css({'background-color':'#ccc','color':'white'});
            $(this).css({'background-color':'#dde','color':'#555'});

            var player = $('#player')[0];
            var id = $(this).text().toLowerCase();
            player.src = "music/gbv_"+id+".mp3";
            player.play();

        });

});

