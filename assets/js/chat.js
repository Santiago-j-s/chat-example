window.onload = function() {
  form.onsubmit = function() {
    if (!conn) {
      return false;
    }
    if (!msg.value) {
      return false;
    }
    let val = msg.value;
    conn.send(val);

    let item;
    setTimeout(() => {
      item = document.createElement("div");

      item.setAttribute("id", "success");
      item.classList.add("success");

      item.innerHTML = `${val} enviado`;

      document.getElementById("form").after(item);
    }, 300);

    setTimeout(() => {
      item.parentNode.removeChild(item);
    }, 3000)

    msg.value = "";
    return false;
  };
};
