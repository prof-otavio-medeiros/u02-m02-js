import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const jornadas = (req, res) => {
  let arrJornadas = [
    {
      nome: "Otávio Medeiros",
      diaSemana: "segunda-feira",
      feriado: true,
      jornadaTrabalhadaEmMinutos: 540,
    },
    {
      nome: "Jaqueline Barbosa ",
      diaSemana: "terça-feira",
      feriado: true,
      jornadaTrabalhadaEmMinutos: 600,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "quarta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 490,
    },
    {
      nome: "Marlon Praxedes",
      diaSemana: "quarta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 400,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "sexta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 480,
    },
    {
      nome: "Catarina Sables",
      diaSemana: "sábado",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 200,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "sábado",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 600,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "domingo",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 500,
    },
    {
      nome: "Otávio Medeiros",
      diaSemana: "quinta-feira",
      feriado: false,
      jornadaTrabalhadaEmMinutos: 480,
    },
  ];

  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(arrJornadas));
  res.end();
};

const redirecting = (req, res) => {
  let url = "http://google.com";
  let body = `<p>Redirecting to <a href="${url}">${url}</a></p>`;

  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  res.writeHead(302, {
    "Content-Type": "text/html",
    Location: url,
    "Content-Length": body.length,
  });
  res.write(body);
  res.end();
};

//
// https://www.pabbly.com/tutorials/node-js-http-module-serving-static-files-html-css-images/
//
const picture = (req, res) => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let imagePath = path.join(__dirname, "imgs", "escape_chars.png");
  let fileStream = fs.createReadStream(imagePath);
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  res.writeHead(200, { "Content-Type": "image/png" });
  fileStream.pipe(res);
};

function app(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  switch (req.url) {
    case "/jornadas":
      jornadas(req, res);
      break;
    case "/redirecting":
      redirecting(req, res);
      break;
    case "/picture":
      picture(req, res);
      break;
    default:
      break;
  }
}

http.createServer(app).listen(9095);
