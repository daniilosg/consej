# 70 Consejos de Salomón — versión local en español

Proyecto estático y local. No consulta la página de origen ni servicios de traducción.

## Configuración
Edite `js/config.js`:
- `showBonuses`: `true` o `false`
- `price`: precio mostrado en el card de oferta
- `checkoutUrl`: URL del checkout

## Vista previa
Ejecute `preview.bat` en Windows o:
`python -m http.server 8080`

## Docker
`docker build -t 70-consejos .`
`docker run --rm -p 8080:80 70-consejos`
