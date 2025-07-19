$(document).ready(()=>{
    $.ajax({  //enlazar  data 
        type: "GET",
        url: "data/xml/docen.xml", //de donde
        dataType:"xml" //tipo de dato
    }).done((data)=>{
        $(data).find('docente').each(
            function(){
                let fila = $('<tr>')
                fila.append($(`<td>${$(this).find('dni').text()}</td>`));
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`));
                fila.append($(`<td>${$(this).find('edad').text()}</td>`));
                $('#docentes tbody').append(fila);
                
            })
         
    })
    $.ajax({  //enlazar  data 
        type: "GET",
        url: "data/xml/cur.xml", //de donde
        dataType:"xml" //tipo de dato
    }).done((data)=>{
        $(data).find('alumno').each(
            function(){
                let fila = $('<tr>')
                fila.append($(`<td>${$(this).find('dni').text()}</td>`));
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`));
                fila.append($(`<td>${$(this).find('edad').text()}</td>`));
                $('#alumnos tbody').append(fila);
                
            })
         
    })
    $.ajax({  //enlazar  data 
        type: "GET",
        url: "data/xml/alum.xml", //de donde
        dataType:"xml" //tipo de dato
    }).done((data)=>{
        $(data).find('alumno').each(
            function(){
                let fila = $('<tr>')
                fila.append($(`<td>${$(this).find('id_curso').text()}</td>`));
                fila.append($(`<td>${$(this).find('id_nombre').text()}</td>`));
                fila.append($(`<td>${$(this).find('n_horas').text()}</td>`));
                $('#curso tbody').append(fila);
                
            })
         
    })
})

