### Comandos de uso comun 

## Para desplegar con docker
``bash
    docker-compose build
    docker-compose up -d
``
## Para crear un proyecto desde cero:
``bash
    composer create-project laravel/laravel nombreApp
``

## Para instalar (cuando recien se descarga de github, cuando el proyecto ya existe):
``bash
    composer install
``

### -------------------------------------------------------------------------------------------------------

### Para Laravel

## Para crear controladores (dentro del contenedor):
``bash
    php artisan make:controller NombreController
``
## En los controladores metemos la logica de la aplicacion (el acceso a base de datos, etc)

### -------------------------------------------------------------------------------------------------------

### Base de Datos

## Para actualizar la base de datos
``bash
    php artisan migrate
``
## Para crear una migracion de una tabla
``bash
    php artisan make:migration nombre_da_lo_mismo --create=nombre_tabla_siempre_en_plural
``
## Para crear un modelo (Un Modelo es un archivo que permite efectuar operaciones con la base de datos)
``bash
    php artisan make:model Nombre 
``
## IMPORTANTE: Siempre el nombre en SINGULAR