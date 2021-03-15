# Arkusnexus

El proyecto fue desarrollado con Angular 8.2, utilizando Angular Material

Consta de 3 módulos:
  + Principal
  + Admin
  + Compartido

Principal.-
Se utilizó Angular Material para la UI

Admin.-
Es un módulo protegido por credenciales de usuario.
Se utilizó Firenze Authentication para protegerlo y mantener la sesión del usuario persistente.

Compartido.-
En este módulo se importan todos los módulos y librerías que se utilizaran, para poder compartirlas en toda la aplicación
Se hicieron dos ejemplos de HttoClient, para conexión con APIs Endpoints y extraer los datos ejemplo y presentarlos en el template HTML
La conexión se hace a través de un servicio.
La comunicación  se maneja a través de Observables y la respuesta por medio de un Subscribe, utilizando la librería rxjs, para comunicación asíncrona.
Se agrego una barra de búsqueda, para mostrar el uso de Pipes, por medio de un “Filter”

Para instalarlo en un servidor local:
+ Clonar el repositorio en la computadora
+ Instalar todas las dependencias, con node:  npm install


PRUEBA EN VIVO:
La aplicación está instalada en GCS, Firebase Cloud:
URL :  https://ubicame-e2a9b.web.app
User:  admin@arkusnexus.com
Password:  123qwe








