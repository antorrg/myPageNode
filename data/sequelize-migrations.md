
# Sequelize migraciones:

Las migraciones en Sequelize son una herramienta poderosa para gestionar cambios en la base de datos sin perder datos, especialmente en entornos de producción. A diferencia de `sync` con `force` o `alter`, que pueden recrear o modificar tablas automáticamente pero con riesgo de perder datos, las migraciones te permiten aplicar cambios controlados y versionados a tu esquema de base de datos.

### Cómo hacer migraciones en Sequelize:

1. **Instalar las dependencias necesarias:**
   Si aún no tienes el CLI de Sequelize instalado, debes instalarlo junto con el paquete de migraciones.

   ```bash
   npm install --save sequelize-cli
   ```

2. **Inicializar Sequelize en tu proyecto:**
   Si no lo has hecho antes, puedes inicializar Sequelize para crear las carpetas y archivos necesarios.

   ```bash
   npx sequelize-cli init
   ```

   Esto creará una estructura básica de carpetas:
   - `config/`: Configuraciones de la base de datos.
   - `models/`: Archivos de definición de modelos.
   - `migrations/`: Carpeta donde se guardarán las migraciones.
   - `seeders/`: (Opcional) Para agregar datos iniciales a la base de datos.

3. **Crear una migración:**
   Para generar una nueva migración, puedes usar el siguiente comando:

   ```bash
   npx sequelize-cli migration:generate --name nombre_de_la_migracion
   ```

   Esto creará un archivo en la carpeta `migrations` con un timestamp y el nombre que hayas elegido.

4. **Editar la migración:**
   Abre el archivo de la migración generado y define los cambios que quieres aplicar. Por ejemplo, si deseas agregar una nueva columna a una tabla:

   ```javascript
   module.exports = {
     up: async (queryInterface, Sequelize) => {
       await queryInterface.addColumn('Usuarios', 'edad', {
         type: Sequelize.INTEGER,
         allowNull: true,
       });
     },

     down: async (queryInterface, Sequelize) => {
       await queryInterface.removeColumn('Usuarios', 'edad');
     },
   };
   ```

   La función `up` define los cambios a aplicar y la función `down` revierte esos cambios.

5. **Ejecutar las migraciones:**
   Una vez que hayas definido las migraciones, puedes ejecutarlas con el siguiente comando:

   ```bash
   npx sequelize-cli db:migrate
   ```

   Esto aplicará todas las migraciones pendientes a tu base de datos.

6. **Revertir una migración (opcional):**
   Si necesitas revertir la última migración, puedes hacerlo con:

   ```bash
   npx sequelize-cli db:migrate:undo
   ```

   Para revertir todas las migraciones, usa:

   ```bash
   npx sequelize-cli db:migrate:undo:all
   ```

### Ventajas de las migraciones:
- **Versionado**: Puedes llevar un historial de todos los cambios en la base de datos.
- **Despliegue**: Facilita la aplicación de cambios en entornos de producción sin riesgos de perder datos.
- **Reversibilidad**: Permite deshacer cambios en caso de errores.

Las migraciones son especialmente útiles en entornos donde necesitas mantener la integridad y consistencia de los datos mientras aplicas actualizaciones a la estructura de la base de datos.