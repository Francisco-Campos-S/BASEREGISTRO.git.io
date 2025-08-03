# 📊 Sistema de Registro de Asistencia 2026

Sistema profesional para el control de asistencia estudiantil con integración de Firebase para almacenamiento en la nube.

## 🚀 Características

- ✅ **Registro de Asistencia**: Control diario por estudiante
- ✅ **Indicadores**: Gestión de indicadores por grupo
- ✅ **Trabajo Cotidiano**: Evaluación diaria
- ✅ **Tareas**: Sistema de evaluación de tareas
- ✅ **Pruebas**: Evaluación de pruebas con pesos
- ✅ **Proyectos**: Evaluación de proyectos
- ✅ **Portafolios**: Sistema de portafolios
- ✅ **SEA Período**: Resumen general de evaluaciones
- ✅ **Firebase Integration**: Almacenamiento en la nube
- ✅ **Exportación Excel**: Importar/exportar datos
- ✅ **Modo Oscuro**: Interfaz adaptable
- ✅ **Responsive**: Diseño adaptable a dispositivos

## ☁️ Configuración de Firebase

### 1. Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear proyecto"
3. Nombra tu proyecto (ej: "registro-asistencia-2026")
4. Sigue los pasos de configuración

### 2. Habilitar Firestore Database

1. En el panel de Firebase, ve a "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba"
4. Elige la ubicación más cercana

### 3. Obtener Credenciales

1. Ve a "Configuración del proyecto" (ícono de engranaje)
2. Selecciona "Configuración de SDK"
3. Copia la configuración de Firebase

### 4. Configurar el Proyecto

1. Abre el archivo `firebase-config.js`
2. Reemplaza la configuración con tus credenciales:

```javascript
const firebaseConfig = {
    apiKey: "tu-api-key",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

### 5. Configurar Reglas de Firestore

En Firebase Console > Firestore Database > Reglas, usa estas reglas para desarrollo:

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

**⚠️ IMPORTANTE**: Estas reglas permiten acceso público. Para producción, configura autenticación.

## 🚀 Despliegue en GitHub Pages

### 1. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Crea un nuevo repositorio
3. Sube todos los archivos del proyecto

### 2. Configurar GitHub Pages

1. Ve a Settings > Pages
2. En "Source", selecciona "Deploy from a branch"
3. Selecciona la rama "main" y carpeta "/ (root)"
4. Haz clic en "Save"

### 3. Dominio Personalizado (Opcional)

1. En Settings > Pages
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones

## 📁 Estructura del Proyecto

```
REGISTRO2026git.io/
├── index.html              # Página principal
├── script.js               # Lógica principal
├── style.css               # Estilos
├── firebase-config.js      # Configuración Firebase
└── README.md               # Documentación
```

## 🔧 Funciones de Firebase

### Guardado Automático
- Los datos se guardan automáticamente cada 30 segundos
- Guardado manual con botón "Guardar en la nube"
- Respaldo en localStorage

### Sincronización
- Carga automática desde Firebase al iniciar
- Fallback a datos locales si no hay conexión
- Sincronización de todas las secciones

### Datos Almacenados
- **Asistencia**: Estudiantes y días
- **Indicadores**: Lista de indicadores
- **Evaluaciones**: Pruebas y notas
- **Tareas**: Sistema de tareas
- **Trabajo Cotidiano**: Evaluación diaria
- **Proyectos**: Evaluación de proyectos
- **Portafolios**: Sistema de portafolios
- **Configuración**: Notas de aprobación, alertas

## 🎯 Uso del Sistema

### 1. Configuración Inicial
1. Configura Firebase (ver sección anterior)
2. Abre `index.html` en tu navegador
3. Los datos se cargarán automáticamente desde la nube

### 2. Gestión de Estudiantes
- Agregar estudiantes con el botón "Agregar estudiante"
- Editar datos directamente en la tabla
- Ordenar estudiantes alfabéticamente
- Eliminar estudiantes por número

### 3. Control de Asistencia
- Agregar días con el botón "+ Agregar día"
- Marcar asistencia, ausencia justificada/injustificada
- Ver porcentajes automáticamente calculados
- Alertas tempranas configurables

### 4. Evaluaciones
- Configurar pesos y puntos máximos
- Ingresar notas por estudiante
- Ver cálculos automáticos
- Exportar a Excel

### 5. Sincronización en la Nube
- **Guardar en la nube**: Guarda todos los datos
- **Cargar desde la nube**: Recupera datos guardados
- Sincronización automática cada 30 segundos

## 📊 Exportación e Importación

### Excel
- **Descargar plantilla**: Plantilla con formato correcto
- **Importar Excel**: Cargar datos desde archivo Excel
- **Exportar Excel**: Descargar datos en formato Excel

### Firebase
- **Guardar en la nube**: Guarda todos los datos
- **Cargar desde la nube**: Recupera datos guardados

## 🔒 Seguridad

### Desarrollo
- Reglas de Firestore abiertas para desarrollo
- Datos accesibles públicamente

### Producción (Recomendado)
1. Configurar autenticación de Firebase
2. Implementar reglas de seguridad
3. Restringir acceso por usuario/rol

## 🛠️ Solución de Problemas

### Error de Conexión Firebase
1. Verifica las credenciales en `firebase-config.js`
2. Asegúrate de que Firestore esté habilitado
3. Revisa las reglas de Firestore

### Datos No Se Guardan
1. Verifica la conexión a internet
2. Revisa la consola del navegador para errores
3. Usa el botón "Guardar en la nube" manualmente

### Problemas de Renderizado
1. Limpia el caché del navegador
2. Verifica que todos los archivos estén subidos
3. Revisa la consola para errores JavaScript

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🔄 Actualizaciones

### Versión 2.2
- ✅ Integración completa con Firebase
- ✅ Sincronización automática
- ✅ Guardado en la nube
- ✅ Carga automática de datos
- ✅ Interfaz mejorada

## 📞 Soporte

Para problemas o preguntas:
1. Revisa la consola del navegador (F12)
2. Verifica la configuración de Firebase
3. Asegúrate de que todos los archivos estén presentes

## 📄 Licencia

Este proyecto es de uso libre para fines educativos.

---

**¡Sistema listo para usar con Firebase! 🚀**
