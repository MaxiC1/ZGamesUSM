### Comandos de uso comun 

## Para desplegar con docker
``
    docker-compose build
    docker-compose up -d
``
## Para crear un proyecto desde cero:
``
    composer create-project laravel/laravel nombreApp
``

## Para instalar (cuando recien se descarga de github, cuando el proyecto ya existe):
``
    composer install
``

### -------------------------------------------------------------------------------------------------------

### Para Laravel

## Para crear controladores (dentro del contenedor):
``
    php artisan make:controller NombreController
``
## En los controladores metemos la logica de la aplicacion (el acceso a base de datos, etc)

### -------------------------------------------------------------------------------------------------------

### Base de Datos

## Para actualizar la base de datos
``
    php artisan migrate
``
## Para crear una migracion de una tabla
``
    php artisan make:migration nombre_da_lo_mismo --create=nombre_tabla_siempre_en_plural
``
## Para crear un modelo (Un Modelo es un archivo que permite efectuar operaciones con la base de datos)
``
    php artisan make:model Nombre 
``
## IMPORTANTE: Siempre el nombre en SINGULAR