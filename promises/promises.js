import fs from "fs";

function syncAction() {
  console.log(">> 1\n");
  const texto = fs.readFileSync("./promises/arq_00.txt");
  console.log(texto.toString());
  console.log("\n>> 2");
  //
  // SAÍDA
  //
  //    >> 1
  //
  //    [[ FILE CONTENT ]]
  //
  //    >> 2
  //
}

function asyncAction() {
  console.log(">> 1\n");
  fs.readFile("./promises/arq_00.txt", (err, texto) => {
    if (err) {
      console.log(err);
    } else {
      setTimeout(() => console.log(texto.toString()), 2000);
    }
  });
  console.log(">> 2\n");
  //
  // SAÍDA
  //
  //    >> 1
  //
  //    >> 2
  //
  //    [[ FILE CONTENT ]]
  //
}

function multipleAsyncFile() {
  fs.readFile("./promises/arq_00.txt", (err, texto) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.writeFile("./promises/arq_01.txt", texto, (err) => {
        if (err) {
          throw new Error(err);
        } else {
          fs.readFile("./promises/arq_01.txt", (err, texto) => {
            if (err) {
              throw new Error(err);
            } else {
              let txtUpp = texto.toString().toUpperCase();
              fs.writeFile("./promises/arq_02.txt", txtUpp, (err) => {
                if (err) {
                  throw new Error(err);
                } else {
                  fs.readFile("./promises/arq_02.txt", (err, texto) => {
                    if (err) {
                      throw new Error(err);
                    } else {
                      console.log(texto.toString());
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

function multipleBlockAsyncFile() {
  const callbackReadFileArq_00 = (err, texto) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.writeFile("./promises/arq_01.txt", texto, callbackWriteFileArq_01);
    }
  };

  const callbackWriteFileArq_01 = (err) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.readFile("./promises/arq_01.txt", callbackReadFileArq_02);
    }
  };

  const callbackReadFileArq_02 = (err, texto) => {
    if (err) {
      throw new Error(err);
    } else {
      let txtUpp = texto.toString().toUpperCase();
      fs.writeFile("./promises/arq_02.txt", txtUpp, callbackWriteFileArq_02);
    }
  };

  const callbackWriteFileArq_02 = (err) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.readFile("./promises/arq_02.txt", callbackReadFileArq_02_End);
    }
  };

  const callbackReadFileArq_02_End = (err, texto) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(texto.toString());
    }
  };

  fs.readFile("./promises/arq_00.txt", callbackReadFileArq_00);
}

function promisesFile() {
  const promiseWriteFileArq_01 = (texto) => {
    return fs.promises.writeFile("./promises/arq_01.txt", texto, "utf-8");
  };

  const promiseReadFileArq_01 = () => {
    return fs.promises.readFile("./promises/arq_01.txt", "utf-8");
  };

  const promiseWriteFileArq_02 = (texto) => {
    let txtUpp = texto.toString().toUpperCase();
    return fs.promises.writeFile("./promises/arq_02.txt", txtUpp, "utf-8");
  };

  const promiseReadFileArq_02 = () => {
    return fs.promises.readFile("./promises/arq_02.txt", "utf-8");
  };

  const showFileArq_02 = (texto) => {
    console.log(texto);
  };

  const showError = (err) => {
    throw new Error(err);
  };

  fs.promises
    .readFile("./promises/arq_00.txt", "utf-8")
    .then(promiseWriteFileArq_01)
    .then(promiseReadFileArq_01)
    .then(promiseWriteFileArq_02)
    .then(promiseReadFileArq_02)
    .then(showFileArq_02)
    .catch(showError);
}

async function asyncAwaitFile() {
  const promiseWriteFileArq_01 = (texto) => {
    return fs.promises.writeFile("./promises/arq_01.txt", texto, "utf-8");
  };

  const promiseReadFileArq_01 = () => {
    return fs.promises.readFile("./promises/arq_01.txt", "utf-8");
  };

  const promiseWriteFileArq_02 = (texto) => {
    let txtUpp = texto.toString().toUpperCase();
    return fs.promises.writeFile("./promises/arq_02.txt", txtUpp, "utf-8");
  };

  const promiseReadFileArq_02 = () => {
    return fs.promises.readFile("./promises/arq_02.txt", "utf-8");
  };

  const showFileArq_02 = (texto) => {
    console.log(texto);
  };

  try {
    let texto = await fs.promises.readFile("./promises/arq_00.txt", "utf-8");
    await promiseWriteFileArq_01(texto);
    texto = await promiseReadFileArq_01();
    await promiseWriteFileArq_02(texto);
    texto = await promiseReadFileArq_02();
    showFileArq_02(texto);
  } catch (err) {
    throw new Error(err);
  }
}

switch ("ASAWFILE") {
  case "SYNC":
    syncAction();
    break;
  case "ASYNC":
    asyncAction();
    break;
  case "MASYNC":
    multipleAsyncFile();
    break;
  case "MBASYNC":
    multipleBlockAsyncFile();
    break;
  case "PRFILE":
    promisesFile();
    break;
  case "ASAWFILE":
    asyncAwaitFile();
    break;
  default:
    break;
}
