var title = document.querySelector('title').innerHTML;

var setClicks = function(data){
    var spans = document.querySelectorAll('#clicks');
    var clicks = "（╯‵□′）╯︵┴─┴";
    if(data.hasOwnProperty('clicks'))
        clicks = data['clicks'];
    for(var i=0;i<spans.length;i++)
        spans[i].innerHTML = clicks;
}

$.ajax({
    'url' : 'http://104.168.246.59/myblog/clicks.php',
    'data' : {
        'title' : title
    },
    'dataType' : 'json',
    'method' : 'POST',
    'success' : setClicks,
    'error' : setClicks
});
