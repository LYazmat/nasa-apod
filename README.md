[![linkedin](https://img.shields.io/badge/Linkedin-FFFFFF?style=flat&logo=linkedin&logoColor=blue)](https://www.linkedin.com/in/marcus-vinicius-de-miranda)
[![instagram](https://img.shields.io/badge/Instagram-FFFFFF?style=flat&logo=instagram&logoColor=orange)](https://www.instagram.com/marcusmiran/)
[![instagram](https://img.shields.io/badge/Twitch-FFFFFF?style=flat&logo=twitch&logoColor=purple)](https://www.twitch.tv/lyazmat)

## Exercício de API - Tera

<br>
<p>
O exercício consiste em consumir a API fornecida pela NASA, para informar a imagem do dia junto ao título e sua explicação ao Usuário.
</p>
<p>
Para isso usaremos a APOD API (Astronomy Picture of the Day).</p>
<p>
Link em: <a href="https://api.nasa.gov/#browseAPI">API - NASA</a>
</p>
<br>


<p align="center">
  <img src='./media/APOD.png' style='width: 70%'>
</p>

<br>
<p>O acesso da API é dado por:</p>
<h2>HTTP Request</h2>
<span style="background-color: #ccc; color: black;">GET https://api.nasa.gov/planetary/apod</span>
<br>
<br>
<p>Alguns parâmetros são:</p>

<h4>

|  Parameter |    Type    | Default | Description |
|:----------:|:----------:|:-------:|-------------|
|    date    | YYYY-MM-DD |  today  | The date of the APOD image to retrieve |
| start_date | YYYY-MM-DD |   none  | The start of a date range, when requesting date for a range of dates. Cannot be used with date. |
|  end_date  | YYYY-MM-DD |   none  | The end of the date range, when used with start_date. |

</h4>