
//1001. Имеется коробка со сторонами: A × B × C. Определить, пройдёт ли она в дверь с размерами M × K.
function goes_in() {
            console.log("a, b, c, m, k")
            let a = parseInt(elementA.value);
            let b = parseInt(elementB.value);
            let c = parseInt(elementC.value);
            let m = parseInt(elementM.value);
            let k =parseInt(elementK.value);
            if (a <= 0 || b <= 0 || c <= 0 || m <= 0 || k <= 0) {
                result = "Числа должны быть больше нуля!";
            }  // не пользуюсь в итоге
            const goes = ((a <= m && b <= k) || (b <= m && a <= k) ||
                (a <= m && c <= k) || (c <= m && a <= k) ||
                (b <= m && c <= k) || (c <= m && b <= k))
            if (goes) {
                result="Ваша коробка для алоказий пройдет в дверь!"

            }
            
            else {
                result="К сожалению, Вам нужна коробка поменьше (или дверь побольше)."
            }
            document.getElementById("result").value = result;    
        }
        function send() {
           document.getElementById("UserEnter").submit();
        }
        let result;
        let check;

        const elementA = document.getElementById("a");
        const elementB = document.getElementById("b");
        const elementC = document.getElementById("c");
        const elementM = document.getElementById("m");
        const elementK = document.getElementById("k");

        
        

        const elementVerify = document.getElementById("verify");
        elementVerify.addEventListener('click', goes_in);

        const elementSend = document.getElementById("send");
        elementSend.addEventListener('click', send)
