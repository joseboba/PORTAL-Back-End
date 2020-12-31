## Rutas Globales

- localhost:4000/canal
- localhost:4000/distribuidor
- localhost:4000/horario
- localhost:4000/producto
- localhost:4000/usuario

```
Canal
```

- ### `POST localhost/canal/`
Ruta para crear un canal
- ### `PUT localhost/canal/:codigo`
Ruta para actualizar un canal enviando mediante su PrimaryKey(codigo)
- ### `DELETE localhost/canal/:codigo`
Ruta para eliminar un canal enviando mediante su PrimaryKey(codigo)
- ### `GET localhost/canal/`
Ruta para buscar un canal con cualquiera de los parametros del modelo 
- ### `GET localhost/canal/all/`
Ruta para obtener todos los canales existentes
- ### `GET localhost/canal/pk`
Ruta para obtener un canal enviando mediante su PrimaryKey(codigo)


```
Distribuidor
```
- ### `POST localhost/distribuidor/`
Ruta para crear un distribuidor
- ### `PUT localhost/distribuidor/:codigo`
Ruta para actualizar un distribuidor enviando mediante su PrimaryKey(codigo)
- ### `DELETE localhost/distribuidor/:codigo`
Ruta para eliminar un distribuidor enviando mediante su PrimaryKey(codigo)
- ### `GET localhost/distribuidor/`
Ruta para buscar un distribuidor con cualquiera de los parametros del modelo 
- ### `GET localhost/distribuidor/all/`
Ruta para obtener todos los distribuidores existentes
- ### `GET localhost/distribuidor/pk`
Ruta para obtener un distribuidor enviando mediante su PrimaryKey(codigo)


```
Horario
```
- ### `POST localhost/horario/`
Ruta para crear un horario
- ### `PUT localhost/horario/:codigo`
Ruta para actualizar un horario enviando mediante su PrimaryKey(codigo)
- ### `DELETE localhost/horario/:codigo`
Ruta para eliminar un horario enviando mediante su PrimaryKey(codigo)
- ### `GET localhost/horario/`
Ruta para buscar un horario con cualquiera de los parametros del modelo 
- ### `GET localhost/horario/all/`
Ruta para obtener todos los horarios existentes
- ### `GET localhost/horario/pk`
Ruta para obtener un horario enviando mediante su PrimaryKey(codigo)

```
Producto
```
- ### `POST localhost/producto/`
Ruta para crear un producto
- ### `PUT localhost/producto/:codigo`
Ruta para actualizar un producto enviando mediante su PrimaryKey(codigo)
- ### `DELETE localhost/producto/:codigo`
Ruta para eliminar un producto enviando mediante su PrimaryKey(codigo)
- ### `GET localhost/producto/`
Ruta para buscar un producto con cualquiera de los parametros del modelo 
- ### `GET localhost/producto/all/`
Ruta para obtener todos los productos existentes
- ### `GET localhost/producto/pk`
Ruta para obtener un producto enviando mediante su PrimaryKey(codigo)

```
Usuario
```
- ### `POST localhost/usuario/`
Ruta para crear un usuario
- ### `PUT localhost/usuario/:codigo`
Ruta para actualizar sun usuario enviando mediante su PrimaryKey(codigo)
- ### `DELETE localhost/usuario/:codigo`
Ruta para eliminar un usuario enviando mediante su PrimaryKey(codigo)
- ### `GET localhost/usuario/`
Ruta para buscar un usuario con cualquiera de los parametros del modelo 
- ### `GET localhost/usuario/all/`
Ruta para obtener todos los usuarios existentes
- ### `GET localhost/usuario/pk`
Ruta para obtener un usuario enviando mediante su PrimaryKey(codigo)


## npm run dev
Para levantar el servicio en el puerto 4000

## npm start 
Para levantar el servicio en el puerto 4000

## npm install
Es necesario para poder instalar los modulos de node y que el servicio pueda levantar.


## Base de datos
Las credenciales son manipulables en el archivo database/config.js
La base de datos debe de ser creada las tablas seran creadas automaticamente se conecte a la DB
```
CREATE DATABASE PORTAL
```

## Archivo DIST
Se encuentra el front-end en produccion funcionando con servicios localhost:4000 en el navegador para poder manipular la informacion.


## Front-End
- https://github.com/joseboba/PORTAL-Front-End