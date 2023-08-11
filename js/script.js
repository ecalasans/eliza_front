tela = document.getElementById("answer_screen");
txt_question = document.getElementById("user_type");
btn_send_question = document.getElementById("user_question");

let mensagens = '';

btn_send_question.addEventListener(
    "click",
    (event) => {
        event.preventDefault();
        mensagens = "<p class='answer-elizagpt'>" + txt_question.value + "</p>";
        tela.innerHTML += mensagens;

        tela.scrollTop = tela.scrollHeight;

        txt_question.value = "";
    }
);
