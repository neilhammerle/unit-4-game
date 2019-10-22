$(document).ready(function() {
    crystals = ['assets/images/Blue-Crystal.png', 'assets/images/Purple-Crystal.jpg', 'assets/images/Red-Crystal.jpg', 'assets/images/Yellow-Crystal.jpg'];
    var counter = 0;
    var wins = 0;
    var losses = 0;
    $('#wins').text(wins);
    $('#loss').text(losses);

    newCrystals();
    newGame();
    function newCrystals (){
        var numbers = []
        while(numbers.length <4){
            var randomNumber = Math.ceil(Math.random()*15)
            var found = false;
            for (var i=0; i< numbers.length; i++) {
                if (numbers[i] == randomNumber){
                    found = true; break
                }
            }
        }
        if (!found)numbers[numbers.length]= randomNumber;
    }
    for (i = 0; i < numbers.length; i++) {
        var imageCrytal = $('<img>');
        imageCrytal.attr('data-num', numbers [i]);
        imageCrytal.attr('src', crytals[i]);
        imageCrytal.attr('alt', 'crytals');
        imageCrytal.addClass('crstalImage')
        $('#crystals').append(imageCrytal);
    }
    function newGame() {

        counter = 0;
        $ ('#yourScore').text(counter);

        function randomIntFromInterval();

        $('value').text(numberToGuess);

        $('.crystalImage').on('click', function(){
            counter = counter + parseInt($(this).data('num'));

            $('#yourScore').text(counter);

            if (counter == numberToGuess){
                $('#status').text('You Lost!');
                losses ++;
                $('#loss').text(losses);
                console,log(losses)
                $('#crystals').empty();
                newCrystals();
                newGame();
            }
        });
    }
});