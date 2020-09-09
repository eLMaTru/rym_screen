var dreams = [
    { "num": "01", "dream": "Agua" },
    { "num": "02", "dream": "Zapato" },
    { "num": "03", "dream": "Niño" },
    { "num": "04", "dream": "Cama" },
    { "num": "05", "dream": "Hombre" },
    { "num": "06", "dream": "Mujer" },
    { "num": "07", "dream": "Revolver" },
    { "num": "08", "dream": "Culebra" },
    { "num": "09", "dream": "Muerto" },
    { "num": "10", "dream": "Cañon" },
    { "num": "11", "dream": "Árbol" },
    { "num": "12", "dream": "Soldado" },
    { "num": "13", "dream": "Gato" },
    { "num": "14", "dream": "Borracho" },
    { "num": "15", "dream": "Quinceañera" },
    { "num": "16", "dream": "Anillo" },
    { "num": "17", "dream": "Desgracia" },
    { "num": "18", "dream": "Sangre" },
    { "num": "19", "dream": "Pescado" },
    { "num": "20", "dream": "Fiesta" },
    { "num": "21", "dream": "Rio" },
    { "num": "22", "dream": "Patos" },
    { "num": "23", "dream": "Cocinero" },
    { "num": "24", "dream": "Caballo" },
    { "num": "25", "dream": "Fantasma" },
    { "num": "26", "dream": "Misa" },
    { "num": "27", "dream": "Peine" },
    { "num": "28", "dream": "Loco" },
    { "num": "29", "dream": "Espejo" },
    { "num": "30", "dream": "Flores" },
    { "num": "31", "dream": "Luz" },
    { "num": "32", "dream": "Dinero" },
    { "num": "33", "dream": "Cristo" },
    { "num": "34", "dream": "Cabeza" },
    { "num": "35", "dream": "Pajarito" },
    { "num": "36", "dream": "Mantequilla" },
    { "num": "37", "dream": "Dientes" },
    { "num": "38", "dream": "Piedra" },
    { "num": "39", "dream": "Lluvia" },
    { "num": "40", "dream": "Baile" },
    { "num": "41", "dream": "Cuchillo" },
    { "num": "42", "dream": "Prendas" },
    { "num": "43", "dream": "Maco" },
    { "num": "44", "dream": "Cárcel" },
    { "num": "45", "dream": "Pistola" },
    { "num": "46", "dream": "Tomates" },
    { "num": "47", "dream": "Sancocho" },
    { "num": "48", "dream": "Muerto" },
    { "num": "49", "dream": "Carne" },
    { "num": "50", "dream": "Pan" },
    { "num": "51", "dream": "Serrucho" },
    { "num": "52", "dream": "Bebida" },
    { "num": "53", "dream": "Barco" },
    { "num": "54", "dream": "Vaca" },
    { "num": "55", "dream": "Musica" },
    { "num": "56", "dream": "Caída" },
    { "num": "57", "dream": "Jorobado" },
    { "num": "58", "dream": "Abogado" },
    { "num": "59", "dream": "Mata" },
    { "num": "60", "dream": "Escuela" },
    { "num": "61", "dream": "Escopeta" },
    { "num": "62", "dream": "Inundación" },
    { "num": "63", "dream": "Madre" },
    { "num": "64", "dream": "Llanto" },
    { "num": "65", "dream": "Boda" },
    { "num": "66", "dream": "Mujeres" },
    { "num": "67", "dream": "Mordida" },
    { "num": "68", "dream": "Sobrinos" },
    { "num": "69", "dream": "Vicios" },
    { "num": "70", "dream": "Limosnero" },
    { "num": "71", "dream": "Excremento" },
    { "num": "72", "dream": "Jarrón" },
    { "num": "73", "dream": "Hospital" },
    { "num": "74", "dream": "Negros" },
    { "num": "75", "dream": "Payaso" },
    { "num": "76", "dream": "Fuego" },
    { "num": "77", "dream": "Muletas" },
    { "num": "78", "dream": "Prostituta" },
    { "num": "79", "dream": "Ladrón" },
    { "num": "80", "dream": "Pelota" },
    { "num": "81", "dream": "Flores" },
    { "num": "82", "dream": "Pelea" },
    { "num": "83", "dream": "Mal tiempo" },
    { "num": "84", "dream": "Iglesia" },
    { "num": "85", "dream": "Linterna" },
    { "num": "86", "dream": "Humo" },
    { "num": "87", "dream": "Piojos" },
    { "num": "88", "dream": "El papa" },
    { "num": "89", "dream": "Rata" },
    { "num": "90", "dream": "Miedo" },
    { "num": "91", "dream": "Pintores" },
    { "num": "92", "dream": "Médico" },
    { "num": "93", "dream": "Enamorado" },
    { "num": "94", "dream": "Cementerio" },
    { "num": "95", "dream": "Lentes" },
    { "num": "96", "dream": "Marido" },
    { "num": "97", "dream": "Mesa" },
    { "num": "98", "dream": "Lavandería" },
    { "num": "99", "dream": "Hermanos" },
    { "num": "00", "dream": "Huevos" }
]

function loadDreams() {
    var html = '';
    var dreaming_line_1 = $('#dreaming_line_1');
    var dreaming_line_2 = $('#dreaming_line_2');
    var dreaming_line_3 = $('#dreaming_line_3');
    var dreaming_line_4 = $('#dreaming_line_4');
    var dreaming_line_5 = $('#dreaming_line_5');
    var dreaming_line_6 = $('#dreaming_line_6');
    var dreaming_line_7 = $('#dreaming_line_7');
    var dreaming_line_8 = $('#dreaming_line_8');
    var dreaming_line_9 = $('#dreaming_line_9');
    var dreaming_line_10 = $('#dreaming_line_10');

    var randomDreams = []

    while (randomDreams.length <= 50) {
        var random = Math.floor(Math.random() * 100);
        var tmpDream = dreams[random];
        if (!randomDreams.includes(tmpDream)) {
            randomDreams.push(tmpDream);
        }
    }

    var icon = '<i class="fa fa-long-arrow-right" style="color: #2abfcc; display: inline; margin-left: 8px;"></i>';

    for (let index = 0; index < randomDreams.length; index++) {

        var tmpDream = randomDreams[index];

        if (index >= 0 && index <= 4) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_1.append(html);
        } else if (index >= 5 && index <= 9) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_2.append(html);
        } else if (index >= 10 && index <= 14) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_3.append(html);
        } else if (index >= 15 && index <= 19) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_4.append(html);
        } else if (index >= 20 && index <= 24) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_5.append(html);
        } else if (index >= 25 && index <= 29) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_6.append(html);
        } else if (index >= 30 && index <= 34) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_7.append(html);
        } else if (index >= 35 && index <= 39) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_8.append(html);
        } else if (index >= 40 && index <= 44) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_9.append(html);
        } else if (index >= 45 && index <= 49) {
            html = '<td class="dream_meaning">' + tmpDream.dream + icon + '</td> <td class="dream_number">' + tmpDream.num + '</td>';
            dreaming_line_10.append(html);
        }

    }
}