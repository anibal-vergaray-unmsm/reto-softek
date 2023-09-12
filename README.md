
 # Reto Softek
 
Este proyecto es una solución al desafío utilizando NestJS.

## Descripción

La aplicación es una plataforma de gestión financiera que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de una entidad llamada "Cliente". Además de las funcionalidades de gestión de clientes, la aplicación también ofrece la capacidad de realizar consultas a la API de Star Wars ([SWAPI](https://swapi.dev/)), proporcionando información detallada sobre personajes, planetas, naves espaciales y más del universo de Star Wars.

## Tecnologías usadas

1.  **AWS (Amazon Web Services):** Plataforma líder de servicios en la nube que proporciona recursos y servicios escalables para alojar aplicaciones y datos en línea.
    
2.  **NestJS:** Marco de desarrollo de aplicaciones Node.js que utiliza TypeScript y se centra en la modularidad y la eficiencia.
    
3.  **Serverless:** Modelo de desarrollo que permite ejecutar código sin preocuparse por la infraestructura subyacente.
    
4.  **TypeScript:** Lenguaje de programación que agrega tipos estáticos a JavaScript, mejorando la calidad del código.
    
5.  **DynamoDB:** Servicio de base de datos NoSQL altamente escalable y administrado proporcionado por AWS.
    
6.  **Jest:** Framework de pruebas unitarias para JavaScript y TypeScript ampliamente utilizado en el desarrollo de aplicaciones.

8. **AWS Lambda:** Servicio de computación sin servidores de AWS que permite ejecutar código en respuesta a eventos, como solicitudes HTTP o cambios en la base de datos, sin preocuparse por la infraestructura subyacente.


## Instalación

 ``1. Clonar el repositorio:`` 

		git clone https://github.com/anibal-vergaray-unmsm/reto-softek.git
 ``2. Instalar dependencias:`` 

		npm install

`3. Establecer las variables de entorno (Renombrar env.example a .env):`

		PORT=3000

		AWS_ACCESS_KEY=<CLAVE DE ACCESO AWS>

		AWS_SECRET_ACCESS=<CLAVE SECRETA DE ACCESO AWS>

		AWS_REGION=<REGION DE AWS>

		SWAPI_URL=https://swapi.dev/api
		
`4. Correr el proyecto en modo desarrollo:`

		npm run start:dev
	
## Despliegue

- **Prueba local**: Para probar el código en un entorno local usando Serverless, ejecuta el siguiente comando:

		serverless offline start	
- **Despliegue en la nube**: Para realizar el despliegue del proyecto en la nube, utiliza el siguiente comando:

		serverless deploy

## Scripts

-  `build`: Compila el código para su despliegue en producción. 
-  `start:dev`: Inicia la aplicación en un entorno de desarrollo local.
-  `start:prod`: Inicia la aplicación utilizando el código previamente compilado. 
-  `test`: Ejecuta pruebas unitarias. 
-  `test:cov`: Muestra el informe de cobertura de las pruebas realizadas.

## Documentación en Swagger

Este proyecto cuenta con documentación automática de la API utilizando Swagger. Puedes acceder a la documentación completa de la API visitando el endpoint `/swagger`. Swagger proporciona una interfaz interactiva que te permite explorar y probar los diferentes puntos finales de la API de manera sencilla y visual.

Para acceder a la documentación de Swagger, sigue estos pasos:

1.  Inicia la aplicación y asegúrate de que esté en funcionamiento.
    
2.  Abre tu navegador web y visita la siguiente URL:
        
    `<url>/swagger` 
    
    Reemplaza `url` con la dirección en la que se está ejecutando tu aplicación.
    
3.  Una vez en la interfaz de Swagger, verás una lista de todos los puntos finales disponibles junto con descripciones detalladas de cada uno.
    
4.  Puedes hacer clic en cada punto final para ver los detalles de la solicitud y la respuesta esperada, así como probar la API directamente desde la interfaz de Swagger.
    
La documentación en Swagger facilita la comprensión y la interacción con la API, lo que simplifica el proceso de desarrollo y prueba de integraciones.

