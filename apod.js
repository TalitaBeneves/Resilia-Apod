function buscar() {
  const API_KEY = "sBE2O2V210iiVSgtwi0OKBBeld98sF8opOxRpQeV";
  const data = $("#data").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${data}`,
    success: function(data){
      apiData(data)
      $(".alert").html("")
    },
    error: function() {
      $(".alert").html("Por favor, insira uma data de 16 de junho de 1995 até a data atual <br> (exceto 17, 18 e 19 de junho de 1995).").css({color: "yellow", fontSize: "15px", paddingTop: "10px", fontWeight: "700"});
      // resit()
    }
  })

  function apiData(busca) {
    const img   = $(".img")
    const title = $(".titulo")
    const autor = $(".autor")
    const expli = $(".expli")

    title.html(busca.title)
    autor.html(`<h3>Credit:</h3> ${busca.copyright}`)
    expli.html(`<h3>Explanation:</h3> ${busca.explanation}`) 

    if (busca.media_type == 'image') {
      img.html(`<img class="img" src="${busca.url}" width: "700"/>`)
    } else {
      img.html(`<iframe width="700" height="300" class="img" src="${busca.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
}