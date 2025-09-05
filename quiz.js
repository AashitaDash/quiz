function submitAnswers() {
    var total = 5;
    var score = 0;

    var answers = ["c", "b", "c", "b", "c"];

    for (var i = 1; i <= total; i++) {
        var selectedAnswer = document.forms["quizForm"]["q" + i].value;
        if (selectedAnswer === null || selectedAnswer === '') {
            alert('You Missed Question ' + i);
            return false;
        }
        if (selectedAnswer === answers[i - 1]) {
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    alert('You Scored ' + score + ' Out Of ' + total);
    return false;
}

