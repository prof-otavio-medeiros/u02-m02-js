function jornadas(show) {
  if (show) {
    const requestInfo = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    fetch("http://localhost:9095/jornadas", requestInfo)
      .then((response) => response.json())
      .then((arrJson) => {
        let jornadas = "";
        for (json of arrJson) {
          jornadas += JSON.stringify(json, undefined, 2);
        }
        document.getElementById("jornadas").innerText = jornadas;
      });
  } else {
    document.getElementById("jornadas").innerText = "";
  }
}

//
// https://stackoverflow.com/questions/50248329/fetch-image-from-api
//
function picture(show) {
  if (show) {
    const requestInfo = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "image/png",
      }),
    };
    fetch("http://localhost:9095/picture", requestInfo)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        document.getElementById("picture").src = imageObjectURL;
      });
  } else {
    document.getElementById("picture").src = "";
  }
}
