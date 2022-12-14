import fs from "fs";

function syncAction() {
  console.log("\n>> 1\n");
  const data = fs.readFileSync("./arq_00.txt", "utf-8");
  console.log(data);
  console.log("\n>> 2\n");
}

function asyncAction() {
  console.log();
  console.log("\n>> 1\n");
  fs.readFile("./arq_00.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      console.log();
    } else {
      console.log(data);
      console.log();
    }
  });
  console.log(">> 2\n");
  // const callback = (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     console.log();
  //   } else {
  //     console.log(data);
  //     console.log();
  //   }
  // };
  // console.log();
  // console.log("\n>> 1\n");
  // fs.readFile("./arq_00.txt", "utf8", callback);
  // console.log(">> 2\n");
}

function multipleAsyncFile() {
  fs.readFile("./arq_00.txt", (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.writeFile("./arq_01.txt", data, (err) => {
        if (err) {
          throw new Error(err);
        } else {
          fs.readFile("./arq_01.txt", (err, data) => {
            if (err) {
              throw new Error(err);
            } else {
              let dataUpp = data.toString().toUpperCase();
              fs.writeFile("./arq_02.txt", dataUpp, (err) => {
                if (err) {
                  throw new Error(err);
                } else {
                  fs.readFile("./arq_02.txt", (err, data) => {
                    if (err) {
                      throw new Error(err);
                    } else {
                      console.log(data.toString());
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
  const callbackReadFileArq_00 = (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.writeFile("./arq_01.txt", data, callbackWriteFileArq_01);
    }
  };

  const callbackWriteFileArq_01 = (err) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.readFile("./arq_01.txt", callbackReadFileArq_02);
    }
  };

  const callbackReadFileArq_02 = (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      let dataUpp = data.toString().toUpperCase();
      fs.writeFile("./arq_02.txt", dataUpp, callbackWriteFileArq_02);
    }
  };

  const callbackWriteFileArq_02 = (err) => {
    if (err) {
      throw new Error(err);
    } else {
      fs.readFile("./arq_02.txt", callbackReadFileArq_02_End);
    }
  };

  const callbackReadFileArq_02_End = (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(data.toString());
    }
  };

  fs.readFile("./arq_00.txt", callbackReadFileArq_00);
}

function promisesFile() {
  const promiseWriteFileArq_01 = (data) => {
    return fs.promises.writeFile("./arq_01.txt", data, "utf-8");
  };

  const promiseReadFileArq_01 = () => {
    return fs.promises.readFile("./arq_01.txt", "utf-8");
  };

  const promiseWriteFileArq_02 = (data) => {
    let dataUpp = data.toString().toUpperCase();
    return fs.promises.writeFile("./arq_02.txt", dataUpp, "utf-8");
  };

  const promiseReadFileArq_02 = () => {
    return fs.promises.readFile("./arq_02.txt", "utf-8");
  };

  const showFileArq_02 = (data) => {
    console.log(data);
  };

  const showError = (err) => {
    throw new Error(err);
  };

  fs.promises
    .readFile("./arq_00.txt", "utf-8")
    .then(promiseWriteFileArq_01)
    .then(promiseReadFileArq_01)
    .then(promiseWriteFileArq_02)
    .then(promiseReadFileArq_02)
    .then(showFileArq_02)
    .catch(showError);
}

async function asyncAwaitFile() {
  const promiseWriteFileArq_01 = (data) => {
    return fs.promises.writeFile("./arq_01.txt", data, "utf-8");
  };

  const promiseReadFileArq_01 = () => {
    return fs.promises.readFile("./arq_01.txt", "utf-8");
  };

  const promiseWriteFileArq_02 = (data) => {
    let dataUpp = data.toString().toUpperCase();
    return fs.promises.writeFile("./arq_02.txt", dataUpp, "utf-8");
  };

  const promiseReadFileArq_02 = () => {
    return fs.promises.readFile("./arq_02.txt", "utf-8");
  };

  const showFileArq_02 = (data) => {
    console.log(data);
  };

  try {
    let data = await fs.promises.readFile("./arq_00.txt", "utf-8");
    await promiseWriteFileArq_01(data);
    data = await promiseReadFileArq_01();
    await promiseWriteFileArq_02(data);
    data = await promiseReadFileArq_02();
    showFileArq_02(data);
  } catch (err) {
    throw new Error(err);
  }
}

switch (process.argv[2]) {
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
    console.log(`
Informe um parâmetro válido:

  SYNC     -> syncAction()
  ASYNC    -> asyncAction()
  MASYNC   -> multipleAsyncFile()
  MBASYNC  -> multipleBlockAsyncFile()
  PRFILE   -> promisesFile()
  ASAWFILE -> asyncAwaitFile()
`);
    break;
}
