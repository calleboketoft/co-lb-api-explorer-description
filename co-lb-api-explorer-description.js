module.exports = {
  getDescription: function (headerText, descriptionHTML) {
    console.log(__dirname)
    return `
      <style>
        #logo {display:none;}
        @media screen {
          body #header {
            background-color: #3E3E3E;
          }
          body #header a#logo {
            background: transparent;
            padding: 20px 0px;
          }
        }

      </style>
      ${descriptionHTML}
      <script>
        document.addEventListener('DOMContentLoaded', setTimeout(titleFix, 0), false)
        function titleFix () {
          var logoEl = document.getElementById('logo')
          logoEl.style.display = 'inline'
          logoEl.innerHTML = "${headerText}"
        }
      </script>
    `
  }
}
