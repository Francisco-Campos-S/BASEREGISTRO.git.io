# 🔥 Configuración de Firebase para Registro de Asistencia

## 📋 Pasos para configurar Firebase

### 1. Crear proyecto en Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Nombre: `registro-asistencia-2026` (o el que prefieras)
4. Desactiva Google Analytics si no lo necesitas
5. Haz clic en "Crear proyecto"

### 2. Configurar Firestore Database
1. En el menú lateral → "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba"
4. Elige ubicación cercana (ej: us-central1)
5. Haz clic en "Listo"

### 3. Configurar reglas de seguridad
En Firestore Database → Pestaña "Reglas" → Reemplaza con:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // Solo para desarrollo
    }
  }
}
```

### 4. Verificar que Firestore esté habilitado
1. En Firebase Console, ve a "Firestore Database"
2. Deberías ver una base de datos creada
3. Si no hay base de datos, haz clic en "Crear base de datos"
4. Selecciona "Comenzar en modo de prueba"
5. Elige ubicación cercana (ej: us-central1)
6. Haz clic en "Listo"

### 5. Obtener credenciales
1. Configuración del proyecto (ícono engranaje)
2. Pestaña "General" → "Tus apps"
3. Haz clic en ícono web (</>)
4. Nombre: `registro-asistencia-web`
5. NO marques Firebase Hosting
6. Haz clic en "Registrar app"
7. Copia la configuración

### 6. ✅ Credenciales ya configuradas
Las credenciales de Firebase ya están configuradas en `firebase-config.js`:
- ✅ API Key configurada
- ✅ Project ID: registro-asistencia-2026
- ✅ Auth Domain configurado
- ✅ Storage Bucket configurado
- ✅ Messaging Sender ID configurado
- ✅ App ID configurado
- ✅ Measurement ID configurado

### 7. Probar la conexión
1. **Opción A: Usar el archivo de prueba**
   - Abre `test-firebase.html` en tu navegador
   - Haz clic en "Probar Conexión"
   - Deberías ver: "✅ Conexión exitosa"

2. **Opción B: Probar en tu sitio principal**
   - Abre tu sitio en GitHub Pages
   - Abre las herramientas de desarrollador (F12)
   - Ve a la consola
   - Deberías ver: "✅ Conexión a Firebase exitosa"

3. **Si hay errores:**
   - Verifica que Firestore esté habilitado en Firebase Console
   - Asegúrate de que las reglas de seguridad permitan lectura/escritura
   - Revisa que no haya errores de red

## 🔧 Funciones disponibles

### Guardar datos en la nube:
- `guardarDatosFirebase()` - Guarda asistencia
- `guardarIndicadoresFirebase()` - Guarda indicadores
- `guardarEvaluacionFirebase()` - Guarda evaluaciones
- `guardarTareasFirebase()` - Guarda tareas
- `guardarTrabajoCotidianoFirebase()` - Guarda trabajo cotidiano
- `guardarProyectoFirebase()` - Guarda proyectos
- `guardarPortafolioFirebase()` - Guarda portafolios
- `guardarConfiguracionFirebase()` - Guarda configuración
- `guardarTodoFirebase()` - Guarda todo

### Cargar datos desde la nube:
- `cargarDatosFirebase()` - Carga asistencia
- `cargarIndicadoresFirebase()` - Carga indicadores
- `cargarEvaluacionFirebase()` - Carga evaluaciones
- `cargarTareasFirebase()` - Carga tareas
- `cargarTrabajoCotidianoFirebase()` - Carga trabajo cotidiano
- `cargarProyectoFirebase()` - Carga proyectos
- `cargarPortafolioFirebase()` - Carga portafolios
- `cargarConfiguracionFirebase()` - Carga configuración
- `cargarTodoFirebase()` - Carga todo

## ⚠️ Importante

- **Modo de prueba**: Las reglas actuales permiten lectura/escritura sin autenticación
- **Para producción**: Deberás configurar autenticación y reglas más seguras
- **Límites gratuitos**: Firebase tiene límites generosos en el plan gratuito
- **Backup**: Los datos se guardan automáticamente en la nube cada 30 segundos

## 🚀 Después de la configuración

Una vez configurado Firebase:
1. Los datos se sincronizarán automáticamente
2. Podrás acceder desde cualquier dispositivo
3. Los datos se mantendrán seguros en la nube
4. Tendrás respaldo automático de toda la información

## 📞 Soporte

Si tienes problemas:
1. Verifica que las credenciales sean correctas
2. Revisa la consola del navegador para errores
3. Asegúrate de que Firestore esté habilitado
4. Verifica las reglas de seguridad 