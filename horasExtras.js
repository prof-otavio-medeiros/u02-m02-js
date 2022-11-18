//
// map x filter x reduce (separados)
//

// let arrJornadas = [
//   {
//     nome: "Otávio Medeiros",
//     diaSemana: "segunda-feira",
//     feriado: true,
//     jornadaTrabalhadaEmMinutos: 540,
//   },
//   {
//     nome: "Jaqueline Barbosa ",
//     diaSemana: "terça-feira",
//     feriado: true,
//     jornadaTrabalhadaEmMinutos: 600,
//   },
//   {
//     nome: "Otávio Medeiros",
//     diaSemana: "quarta-feira",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 490,
//   },
//   {
//     nome: "Marlon Praxedes",
//     diaSemana: "quarta-feira",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 400,
//   },
//   {
//     nome: "Otávio Medeiros",
//     diaSemana: "sexta-feira",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 480,
//   },
//   {
//     nome: "Catarina Sables",
//     diaSemana: "sábado",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 200,
//   },
//   {
//     nome: "Otávio Medeiros",
//     diaSemana: "sábado",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 600,
//   },
//   {
//     nome: "Otávio Medeiros",
//     diaSemana: "domingo",
//     feriado: false,
//     jornadaTrabalhadaEmMinutos: 500,
//   },
// ];

import fetch from "node-fetch";

const calcularHorasExtras = (arrJornadas, colaborador, jornadaNormal = 8) => {
  function fMap(jornada) {
    let jornadaTrabalhadaEmHoras = jornada.jornadaTrabalhadaEmMinutos / 60;
    let horasExtras = jornadaTrabalhadaEmHoras - jornadaNormal;
    horasExtras = horasExtras > 0 ? horasExtras : 0.0;
    return {
      ...jornada,
      jornadaTrabalhadaEmHoras,
      horasExtras,
    };
  }

  function fFilter(jornadaEmHoras) {
    return (
      jornadaEmHoras.nome === colaborador && jornadaEmHoras.horasExtras > 0.0
    );
  }

  function fReduce(
    colaboradorHoraExtraJornadaEmHorasAtual,
    colaboradorHoraExtraJornadaEmHorasAcumulado
  ) {
    let {
      nome,
      totalHorasExtrasNormais,
      totalHorasExtras50PorCento,
      totalHorasExtras100PorCento,
      totalHorasExtras,
    } = colaboradorHoraExtraJornadaEmHorasAtual;
    let horasExtras = colaboradorHoraExtraJornadaEmHorasAcumulado.horasExtras;
    let fatorHoraExtra = 1.0;
    if (colaboradorHoraExtraJornadaEmHorasAcumulado.feriado) {
      fatorHoraExtra = 2.0;
    } else {
      switch (colaboradorHoraExtraJornadaEmHorasAcumulado.diaSemana) {
        case "sábado":
          totalHorasExtras50PorCento += horasExtras;
          fatorHoraExtra = 1.5;
          break;
        case "domingo":
          totalHorasExtras100PorCento += horasExtras;
          fatorHoraExtra = 2.0;
          break;
        default:
          totalHorasExtrasNormais += horasExtras;
          break;
      }
    }
    totalHorasExtras += horasExtras * fatorHoraExtra;
    return {
      nome,
      totalHorasExtrasNormais,
      totalHorasExtras50PorCento,
      totalHorasExtras100PorCento,
      totalHorasExtras,
    };
  }

  let colaboradorHoraExtraAcumuladorEstadoinicial = {
    nome: colaborador,
    totalHorasExtrasNormais: 0,
    totalHorasExtras50PorCento: 0,
    totalHorasExtras100PorCento: 0,
    totalHorasExtras: 0,
  };

  let arrJornadasEmHoras = arrJornadas.map((jornada) => fMap(jornada));

  console.log("map\n===\n", arrJornadasEmHoras);
  console.log();

  let arrColaboradorHorasExtrasJornadaEmHoras = arrJornadasEmHoras.filter(
    (jornadaEmHoras) => fFilter(jornadaEmHoras)
  );

  console.log("filter\n======\n", arrColaboradorHorasExtrasJornadaEmHoras);
  console.log();

  let valorToTalHorasExtrasColaborador =
    arrColaboradorHorasExtrasJornadaEmHoras.reduce(
      (
        colaboradorHoraExtraJornadaEmHorasAtual,
        colaboradorHoraExtraJornadaEmHorasAcumulado
      ) =>
        fReduce(
          colaboradorHoraExtraJornadaEmHorasAtual,
          colaboradorHoraExtraJornadaEmHorasAcumulado
        ),
      colaboradorHoraExtraAcumuladorEstadoinicial
    );

  console.log("reduce\n======\n", valorToTalHorasExtrasColaborador);
  console.log();

  //
  // map x filter x reduce (juntos)
  //

  let resultadoMapFilterReduce = arrJornadas
    .map((jornada) => fMap(jornada))
    .filter((jornadaEmHoras) => fFilter(jornadaEmHoras))
    .reduce(
      (
        colaboradorHoraExtraJornadaEmHorasAtual,
        colaboradorHoraExtraJornadaEmHorasAcumulado
      ) =>
        fReduce(
          colaboradorHoraExtraJornadaEmHorasAtual,
          colaboradorHoraExtraJornadaEmHorasAcumulado
        ),
      colaboradorHoraExtraAcumuladorEstadoinicial
    );
  console.log(
    "map x filter x reduce (juntos)\n==============================\n",
    resultadoMapFilterReduce
  );
  console.log();
};

let colaborador = "Otávio Medeiros";
let jornadaNormal = 8;

fetch("http://localhost:9095/jornadas")
  .then((response) => response.json())
  .then((arrJornadas) =>
    calcularHorasExtras(arrJornadas, colaborador, jornadaNormal)
  );
