function validacampos (){
	let campoNome = document.querySelector("#nome");
	let campoSobrenome = document.querySelector("#sobrenome");
	let campoIdade = document.querySelector("#idade");
	let campoData = document.querySelector("#datadenacimento");
	let campoEmail = document.querySelector("#email");
	let camposVazios = `Prenchas os campos \n
	${campoNome.value.length  <1 ? 'nome':''} \n
	${campoSobrenome.value.length <1? 'sobrenome':''} \n
	${campoIdade.value.length <1? 'idade':''} \n
	${campoData.value.length <1? 'datadenacimento' : ''} \n
	${campoEmail.value.length <1? 'email':''}` ;

	if (campoNome.value.length  <1){
		alert (camposVazios);
		return;
	}

		
	if (campoSobrenome.value.length <1){
		alert (camposVazios);
		return;
	}

		
	if (campoIdade.value.length <1){
		alert (camposVazios);
		return;
	}

		
	if (campoData.value.length <1){
		alert (camposVazios);
		return;
	}

		
	if (campoEmail.value.length  <1){
		alert (camposVazios);
		return;
	}

	console.log("Tudo Certo");
}


function getAjax(){

	let div = document.querySelector("#retorno");
let _url = 'https://api-pacientes.herokuapp.com/pacientes';
		

		let param = {
		
		  
		};

		$.ajax({
			url : _url,
			type : 'get',
			data : param,
			dataType: 'json',
			//username: 'root',
			//password: '123456',
			beforeSend: function(){

			},
			//	timeout: 3000,    
			success: function(retorno){
				div.innerHTML = setTemplate (retorno);
			
			}
		})
}

function setTemplate (model){
	let table = ` <table class="table"> 
          <thead>
            <tr>
              <th>Nome</th>
              <th>Peso</th>
              <th>Altura</th>
              <th>Gordura</th>
              <th>IMC</th>
            </tr>
            <tbody>
             ${model.map((elem ) =>  ` <tr>
                <td>${elem.nome}</td>
                <td>${elem.peso}</td>
                <td>${elem.altura}</td>
                <td>${elem.gordura}</td>
                <td>${elem.imc}</td>
              </tr>`).join('')}
            </tbody>
          </thead>
        </table>`;

      return table;
}
