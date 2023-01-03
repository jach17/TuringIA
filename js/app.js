const list = document.querySelectorAll(".offer_list_item");
const offer_description = document.getElementById("offer_description");
const offer_background = document.querySelector(".offer_background");
const offer_list_item = document.querySelector(".offer_list_item");
const setOfferView = (type) => {
  let url_images_offer = "url(./images/";

  switch (type) {
    case 1: {
      offer_description.innerText = `Nuestra gama de cursos de Tableau incluye: Tableau Prep Tableau Desktop Visual Analytics Tableau Server Adicionalmente ofrecemos cursos sobre: Business Intelligence, Data Mining, Big Data, Data to Insight.`;
      offer_background.style.background = url_images_offer + "offer_cap.png";

      break;
    }
    case 2: {
      offer_description.innerText = `Nos dedicamos a la venta de licencias de software, podemos recomendarle los sistemas que de acuerdo a sus necesidades son más adecuados.`;
      offer_background.style.background = url_images_offer + "offer_vs.png";
      break;
    }
    case 3: {
      offer_description.innerText = `Trabajamos con los mejores proveedores de México y tenemos la capacidad de cubrir cualquier necesidad que tenga de hardware. Redes, computadoras, impresoras y accesorios.`;
      offer_background.style.background = url_images_offer + "offer_vh.png";
      break;
    }
    case 4: {
      offer_description.innerText = `Nuestra metodología de servicios se encuentra orientada en los estándares del Project Management Institute (PMI) ® e International Project Management Association (IPMA). Esto nos permite contar con las competencias para coordinar equipos de trabajo en el inicio, planeación, construcción, monitoreo y control de las actividades y recursos involucrados en un proyecto a partir de los objetivos y requerimientos de nuestro cliente.`;
      offer_background.style.background = url_images_offer + "offer_ba.png";
      break;
    }
    case 5: {
      offer_description.innerText = `En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la "automatización" de procesos que todavía requieren la intervención de las personas en tareas repetitivas.`;
      offer_background.style.background = url_images_offer + "offer_app.png";
      break;
    }
    case 6: {
      offer_description.innerText = `Su estrategia debe abarcar la gestión de personas, procesos y cambios, incluida la identificación de casos de uso comercial inmediatos, la definición de roles, responsabilidades, el establecimiento de medidas para evaluar el éxito y el impacto.`;
      offer_background.style.background = url_images_offer + "offer_ws.png";
      break;
    }
    default: {
      offer_description.innerText = `En un mundo moderno, con la cantidad de problemas y su complejidad cada vez es mayor, el desarrollo de aplicaciones, una herramienta para obtener soluciones precisas, dándole tareas repetitivas a la computadora y logrando así la "automatización" de procesos que todavía requieren la intervención de las personas en tareas repetitivas.`;
      offer_background.style.background = url_images_offer + "offer_app.png";
      break;
    }
  }
};

const btnSubscribe = document.getElementById("subscribeNewsLetter");
const subscribeToNewsletter = () => {
  let email_client = document.getElementById("emailSubscribe").value;
  if (email_client.length != 0) {
    fetch(
      "https://turingiabackend-production.up.railway.app/api/turing_back/landing/add/newsletter",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email_client }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  } else {
    alert("Ingrese un email");
  }
};
