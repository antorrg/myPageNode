Sí, es posible resetear o invalidar el cache en `node-cache` cuando actualizas algún componente o datos que afectan las rutas cacheadas. Aquí te presento algunas formas de hacerlo:

### 1. **Manualmente invalidar el cache:**
   Puedes utilizar métodos proporcionados por `node-cache` para borrar el cache cuando se detecta una actualización en los datos. Por ejemplo, cuando actualizas un componente, puedes llamar a `cache.del(key)` para eliminar una clave específica o `cache.flushAll()` para borrar todo el cache.

   ```javascript
   const NodeCache = require('node-cache');
   const myCache = new NodeCache();

   // En tu ruta de actualización de datos
   app.put('/update-data', (req, res) => {
     // Lógica de actualización de datos

     // Invalida el cache de la ruta GET general
     myCache.del('generalGetRoute');
     res.send('Datos actualizados y cache invalidado');
   });
   ```

   En este ejemplo, `myCache.del('generalGetRoute')` elimina el cache asociado con la clave `generalGetRoute` después de actualizar los datos.

### 2. **Automatizar la invalidación:**
   Si deseas automatizar la invalidación del cache cuando se detectan cambios en los datos de la API, puedes hacerlo dentro de tus controladores o servicios, donde se maneja la lógica de actualización.

   Por ejemplo:

   ```javascript
   // Servicio de actualización de datos
   function updateData(newData) {
     // Actualiza los datos en la base de datos
     // ...

     // Invalida el cache de la ruta GET general
     myCache.flushAll(); // O bien myCache.del(key) para rutas específicas
   }
   ```

   Así te aseguras de que cada vez que se actualizan los datos, el cache relevante se invalida automáticamente.

### 3. **Usar eventos para invalidar el cache:**
   Puedes utilizar eventos para manejar la invalidación del cache. Cada vez que un evento de actualización de datos ocurre, invalidas el cache correspondiente.

   ```javascript
   const EventEmitter = require('events');
   const myEmitter = new EventEmitter();

   // Suscribir a un evento de actualización
   myEmitter.on('dataUpdated', () => {
     myCache.flushAll(); // O bien myCache.del(key)
   });

   // En la actualización de datos
   function updateData(newData) {
     // Actualiza los datos en la base de datos
     // ...

     // Emitir evento de actualización
     myEmitter.emit('dataUpdated');
   }
   ```

   Esta técnica es útil si tienes un sistema más complejo y quieres separar la lógica de invalidación del cache.

### 4. **Usar una estrategia de cache más sofisticada:**
   Puedes optar por una estrategia de cache que sea más adaptativa, como invalidar cache basado en versiones de datos o hash. Cada vez que se actualizan los datos, cambias el identificador del cache.

   ```javascript
   // Cambia la clave del cache al actualizar los datos
   const cacheKey = `generalGetRoute_${dataVersion}`;

   // En la lógica de actualización
   dataVersion++; // O generar un nuevo hash único para los datos actualizados
   ```

### Conclusión

Invalidar el cache en `node-cache` cuando actualizas componentes o datos es crucial para mantener tu aplicación actualizada y evitar que los usuarios vean información obsoleta. Puedes hacerlo manualmente, automatizarlo en tus controladores, o usar eventos y estrategias más sofisticadas para asegurarte de que el cache se maneje de manera eficiente y efectiva.