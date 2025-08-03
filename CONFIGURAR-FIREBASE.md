# 🔥 Configuración Paso a Paso de Firebase

## 📋 Pasos para Configurar Firebase

### Paso 1: Crear Proyecto en Firebase

1. **Ve a Firebase Console**
   - Abre [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Inicia sesión con tu cuenta de Google

2. **Crear Nuevo Proyecto**
   - Haz clic en "Crear proyecto"
   - Nombra tu proyecto: `registro-asistencia-2026`
   - Marca "Habilitar Google Analytics" (opcional)
   - Haz clic en "Continuar"

3. **Configurar Analytics** (si lo habilitaste)
   - Selecciona tu cuenta de Analytics
   - Haz clic en "Crear proyecto"

### Paso 2: Habilitar Firestore Database

1. **Ir a Firestore Database**
   - En el panel izquierdo, haz clic en "Firestore Database"
   - Haz clic en "Crear base de datos"

2. **Configurar Reglas de Seguridad**
   - Selecciona "Comenzar en modo de prueba"
   - Haz clic en "Siguiente"

3. **Elegir Ubicación**
   - Selecciona la ubicación más cercana a tu país
   - Haz clic en "Listo"

### Paso 3: Obtener Credenciales

1. **Ir a Configuración del Proyecto**
   - Haz clic en el ícono de engranaje ⚙️ junto a "Vista general del proyecto"
   - Selecciona "Configuración del proyecto"

2. **Configuración de SDK**
   - Ve a la pestaña "General"
   - Baja hasta "Configuración de SDK"
   - Selecciona "Configuración de SDK"

3. **Copiar Configuración**
   - Verás un código como este:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456"
   };
   ```

### Paso 4: Configurar el Archivo firebase-config.js

1. **Abrir el archivo**
   - Abre `firebase-config.js` en tu editor

2. **Reemplazar la configuración**
   - Busca esta línea:
   ```javascript
   const firebaseConfig = {
       apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
       authDomain: "tu-proyecto.firebaseapp.com",
       projectId: "tu-proyecto",
       storageBucket: "tu-proyecto.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcdef123456"
   };
   ```

3. **Pegar tu configuración real**
   - Reemplaza con las credenciales que copiaste en el Paso 3

### Paso 5: Configurar Reglas de Firestore

1. **Ir a Firestore Database**
   - En Firebase Console, ve a "Firestore Database"
   - Haz clic en la pestaña "Reglas"

2. **Editar Reglas**
   - Reemplaza las reglas existentes con:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

3. **Publicar Reglas**
   - Haz clic en "Publicar"

### Paso 6: Probar la Configuración

1. **Abrir el Sistema**
   - Abre `index.html` en tu navegador
   - Abre la consola del navegador (F12)

2. **Verificar Conexión**
   - Deberías ver mensajes como:
   ```
   ✅ Conexión a Firebase exitosa
   ☁️ Intentando cargar datos desde Firebase...
   ✅ Datos cargados desde Firebase
   ```

3. **Probar Guardado**
   - Agrega algunos datos de prueba
   - Haz clic en "Guardar en la nube"
   - Deberías ver: "✅ Datos guardados en Firebase"

## 🔧 Solución de Problemas

### Error: "Firebase App named '[DEFAULT]' already exists"

**Solución:**
- Verifica que no tengas múltiples configuraciones de Firebase
- Asegúrate de que solo haya una inicialización de Firebase

### Error: "Permission denied"

**Solución:**
- Verifica que las reglas de Firestore estén configuradas correctamente
- Asegúrate de que el proyecto esté en modo de prueba

### Error: "Network error"

**Solución:**
- Verifica tu conexión a internet
- Asegúrate de que Firebase esté disponible en tu región

### Error: "Invalid API key"

**Solución:**
- Verifica que hayas copiado correctamente la API key
- Asegúrate de que no haya espacios extra

## 📊 Verificar que Todo Funciona

### 1. Verificar en Firebase Console

1. Ve a Firestore Database
2. Deberías ver una colección llamada `registroAsistencia`
3. Dentro habrá documentos como:
   - `datos` (estudiantes y días)
   - `indicadores` (lista de indicadores)
   - `evaluacion` (pruebas y notas)
   - `tareas` (sistema de tareas)
   - `trabajoCotidiano` (evaluación diaria)
   - `proyecto` (evaluación de proyectos)
   - `portafolio` (sistema de portafolios)
   - `configuracion` (notas de aprobación, alertas)

### 2. Verificar en el Sistema

1. **Guardar Datos**
   - Agrega algunos estudiantes
   - Haz clic en "Guardar en la nube"
   - Deberías ver el mensaje de éxito

2. **Cargar Datos**
   - Recarga la página
   - Los datos deberían cargar automáticamente desde Firebase

3. **Sincronización Automática**
   - Los datos se guardan automáticamente cada 30 segundos
   - Puedes verificar esto en la consola del navegador

## 🚀 Despliegue en GitHub Pages

### 1. Subir a GitHub

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Asegúrate de incluir:
   - `index.html`
   - `script.js`
   - `style.css`
   - `firebase-config.js`
   - `README.md`

### 2. Configurar GitHub Pages

1. Ve a Settings > Pages
2. En "Source", selecciona "Deploy from a branch"
3. Selecciona la rama "main" y carpeta "/ (root)"
4. Haz clic en "Save"

### 3. Verificar Despliegue

1. Espera unos minutos para que se despliegue
2. Ve a la URL que te proporciona GitHub Pages
3. Verifica que el sistema funcione correctamente

## 🔒 Seguridad para Producción

### Configurar Autenticación (Recomendado)

1. **Habilitar Authentication**
   - En Firebase Console, ve a "Authentication"
   - Haz clic en "Comenzar"
   - Habilita "Correo electrónico/contraseña"

2. **Configurar Reglas de Seguridad**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /registroAsistencia/{document} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

3. **Implementar Login**
   - Agregar sistema de autenticación al código
   - Proteger acceso a los datos

## ✅ Checklist de Configuración

- [ ] Proyecto creado en Firebase
- [ ] Firestore Database habilitado
- [ ] Credenciales copiadas correctamente
- [ ] Archivo `firebase-config.js` actualizado
- [ ] Reglas de Firestore configuradas
- [ ] Conexión probada exitosamente
- [ ] Guardado y carga funcionando
- [ ] Sincronización automática activa
- [ ] Sistema desplegado en GitHub Pages

## 🆘 Soporte

Si tienes problemas:

1. **Revisa la consola del navegador** (F12) para errores
2. **Verifica las credenciales** de Firebase
3. **Asegúrate de que Firestore** esté habilitado
4. **Comprueba las reglas** de seguridad

---

**¡Tu sistema está listo para usar con Firebase! 🚀** 