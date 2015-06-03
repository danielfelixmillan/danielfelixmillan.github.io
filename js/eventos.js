var inicioApp = function()
{
	var Inicio = function ()

	{
		$("#inicio").show("slow");
		$("#informacion").hide();
		$("#practicas").hide();
		$("#examenes").hide();
		$("#proyectos").hide();

	}
	var Informacion = function ()

	{
		$("#informacion").show("slow");
		$("#practicas").hide();
		$("#examenes").hide();
		$("#proyectos").hide();
		$("#inicio").hide();

	}
	var Proyectos = function ()

	{
		$("#proyectos").show("slow");
		$("#practicas").hide();
		$("#examenes").hide();
		$("#informacion").hide();
		$("#inicio").hide();

	}
	var Examenes = function ()

	{
		$("#examenes").show("slow");
		$("#practicas").hide();
		$("#informacion").hide();
		$("#proyectos").hide();
		$("#inicio").hide();

	}
	var Practicas = function ()

	{
		$("#practicas").show("slow");
		$("#informacion").hide();
		$("#examenes").hide();
		$("#proyectos").hide();
		$("#inicio").hide();

	}
	$("#btnInicio").on("click",Inicio);
	$("#btnInformacion").on("click",Informacion);
	$("#btnProyectos").on("click",Proyectos);
	$("#btnExamenes").on("click",Examenes);
	$("#btnPracticas").on("click",Practicas);

}
$(document).on("ready",inicioApp);