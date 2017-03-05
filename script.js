//IT_AT
var it_at_program_button = document.getElementById('it_at_program_button');
it_at_program_button.addEventListener("click", link_program);
var it_at_transpas_button = document.getElementById('it_at_transpas_button');
it_at_transpas_button.addEventListener("click", link_transpas);
var it_at_friki_button = document.getElementById('it_at_friki_button');
it_at_friki_button.addEventListener("click", link_friki);

//ITT_SAT
var itt_sat_program_button = document.getElementById('itt_sat_program_button');
itt_sat_program_button.addEventListener("click", link_program);
var itt_sat_transpas_button = document.getElementById('itt_sat_transpas_button');
itt_sat_transpas_button.addEventListener("click", link_transpas);
var itt_sat_friki_button = document.getElementById('itt_sat_friki_button');
itt_sat_friki_button.addEventListener("click", link_friki);


//ITT_DAT
var itt_dat_program_button = document.getElementById('itt_dat_program_button');
itt_dat_program_button.addEventListener("click", link_program);
var itt_dat_transpas_button = document.getElementById('itt_dat_transpas_button');
itt_dat_transpas_button.addEventListener("click", link_transpas);
var itt_dat_friki_button = document.getElementById('itt_dat_friki_button');
itt_dat_friki_button.addEventListener("click", link_friki);

//IST_SARO
var ist_saro_program_button = document.getElementById('ist_saro_program_button');
ist_saro_program_button.addEventListener("click", link_program);
var ist_saro_transpas_button = document.getElementById('ist_saro_transpas_button');
ist_saro_transpas_button.addEventListener("click", link_transpas);
var ist_saro_friki_button = document.getElementById('ist_saro_friki_button');
ist_saro_friki_button.addEventListener("click", link_friki);

function link_program(e) {
	curse = get_course(e.target.id);
	window.open("https://cursosweb.github.io/programas/" + curse + ".pdf", '_blank');
}

function get_course(string) {
	var parts = string.split("_");
	return parts[0].toUpperCase() + "-" + parts[1].toUpperCase();
}

function link_transpas(e) {
	curse = get_course(e.target.id);
	window.open("https://cursosweb.github.io/transpas/" + curse + ".pdf", '_blank');
}

function link_friki(e) {
	curse = get_course(e.target.id);
	if (curse === "IT-AT") {
		window.open("https://cursosweb.github.io/transpas/frikiminutos-c.pdf", '_blank');
	} else if (curse === "ITT_DAT") {
		window.open("https://cursosweb.github.io/transpas/frikiminutos-b.pdf", '_blank');
	} else {
		window.open("https://cursosweb.github.io/transpas/frikiminutos-a.pdf", '_blank');
	}
}
