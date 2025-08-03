// ===== CONFIGURACIÓN FIREBASE =====
// Configuración de Firebase para registro-asistencia-2026
const firebaseConfig = {
    apiKey: "AIzaSyBj1Da2aE0pEzxT0Z-js1WuAtJ0lSemzX8",
    authDomain: "registro-asistencia-2026.firebaseapp.com",
    projectId: "registro-asistencia-2026",
    storageBucket: "registro-asistencia-2026.firebasestorage.app",
    messagingSenderId: "1064440707746",
    appId: "1:1064440707746:web:279693274afef2ba1535fb",
    measurementId: "G-SCF8REPGVL"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener instancias de Firestore y Auth
const db = firebase.firestore();
const auth = firebase.auth();

// ===== FUNCIONES DE BASE DE DATOS =====

// Función para guardar datos de asistencia
async function guardarDatosFirebase(mostrarNotificacion = false) {
    try {
        // Verificar que las variables estén definidas
        if (typeof estudiantes === 'undefined') {
            console.error('❌ Variable "estudiantes" no está definida');
            return;
        }
        if (typeof dias === 'undefined') {
            console.error('❌ Variable "dias" no está definida');
            return;
        }
        
        const datos = {
            estudiantes: estudiantes || [],
            dias: dias || [],
            timestamp: new Date().toISOString(),
            version: VERSION || '1.0'
        };
        
        await db.collection('registroAsistencia').doc('datos').set(datos);
        console.log('✅ Datos guardados en Firebase');
        
        // Solo mostrar notificación si se solicita
        if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
            mostrarAlerta('Datos guardados en la nube', 'success');
        }
    } catch (error) {
        console.error('❌ Error al guardar en Firebase:', error);
        if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
            mostrarAlerta('Error al guardar en la nube', 'error');
        }
    }
}

// Función para cargar datos de asistencia
async function cargarDatosFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('datos').get();
        if (doc.exists) {
            const datos = doc.data();
            estudiantes = datos.estudiantes || [];
            dias = datos.dias || dias;
            console.log('✅ Datos cargados desde Firebase');
            return true;
        } else {
            console.log('📝 No hay datos en Firebase, usando datos locales');
            return false;
        }
    } catch (error) {
        console.error('❌ Error al cargar desde Firebase:', error);
        return false;
    }
}

// Función para guardar indicadores
async function guardarIndicadoresFirebase() {
    try {
        if (typeof indicadores === 'undefined') {
            console.error('❌ Variable "indicadores" no está definida');
            return;
        }
        
        await db.collection('registroAsistencia').doc('indicadores').set({
            indicadores: indicadores || [],
            timestamp: new Date().toISOString()
        });
        console.log('✅ Indicadores guardados en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar indicadores:', error);
    }
}

// Función para cargar indicadores
async function cargarIndicadoresFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('indicadores').get();
        if (doc.exists) {
            const datos = doc.data();
            indicadores = datos.indicadores || indicadores;
            console.log('✅ Indicadores cargados desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar indicadores:', error);
        return false;
    }
}

// Función para guardar evaluaciones
async function guardarEvaluacionFirebase() {
    try {
        await db.collection('registroAsistencia').doc('evaluacion').set({
            pruebas: pruebas,
            evaluacionesEstudiantes: evaluacionesEstudiantes,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Evaluaciones guardadas en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar evaluaciones:', error);
    }
}

// Función para cargar evaluaciones
async function cargarEvaluacionFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('evaluacion').get();
        if (doc.exists) {
            const datos = doc.data();
            pruebas = datos.pruebas || pruebas;
            evaluacionesEstudiantes = datos.evaluacionesEstudiantes || [];
            console.log('✅ Evaluaciones cargadas desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar evaluaciones:', error);
        return false;
    }
}

// Función para guardar tareas
async function guardarTareasFirebase() {
    try {
        await db.collection('registroAsistencia').doc('tareas').set({
            tareas: tareas,
            tareasEstudiantes: tareasEstudiantes,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Tareas guardadas en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar tareas:', error);
    }
}

// Función para cargar tareas
async function cargarTareasFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('tareas').get();
        if (doc.exists) {
            const datos = doc.data();
            tareas = datos.tareas || tareas;
            tareasEstudiantes = datos.tareasEstudiantes || [];
            console.log('✅ Tareas cargadas desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar tareas:', error);
        return false;
    }
}

// Función para guardar trabajo cotidiano
async function guardarTrabajoCotidianoFirebase() {
    try {
        await db.collection('registroAsistencia').doc('trabajoCotidiano').set({
            diasTrabajo: diasTrabajo,
            trabajoCotidianoEstudiantes: trabajoCotidianoEstudiantes,
            escalaMaxima: escalaMaxima,
            valorTotalTrabajo: valorTotalTrabajo,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Trabajo cotidiano guardado en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar trabajo cotidiano:', error);
    }
}

// Función para cargar trabajo cotidiano
async function cargarTrabajoCotidianoFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('trabajoCotidiano').get();
        if (doc.exists) {
            const datos = doc.data();
            diasTrabajo = datos.diasTrabajo || [];
            trabajoCotidianoEstudiantes = datos.trabajoCotidianoEstudiantes || [];
            escalaMaxima = datos.escalaMaxima || 3;
            valorTotalTrabajo = datos.valorTotalTrabajo || 35;
            console.log('✅ Trabajo cotidiano cargado desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar trabajo cotidiano:', error);
        return false;
    }
}

// Función para guardar proyectos
async function guardarProyectoFirebase() {
    try {
        await db.collection('registroAsistencia').doc('proyecto').set({
            proyectos: proyectos,
            proyectosEstudiantes: proyectosEstudiantes,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Proyectos guardados en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar proyectos:', error);
    }
}

// Función para cargar proyectos
async function cargarProyectoFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('proyecto').get();
        if (doc.exists) {
            const datos = doc.data();
            proyectos = datos.proyectos || [];
            proyectosEstudiantes = datos.proyectosEstudiantes || [];
            console.log('✅ Proyectos cargados desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar proyectos:', error);
        return false;
    }
}

// Función para guardar portafolios
async function guardarPortafolioFirebase() {
    try {
        await db.collection('registroAsistencia').doc('portafolio').set({
            portafolios: portafolios,
            portafoliosEstudiantes: portafoliosEstudiantes,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Portafolios guardados en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar portafolios:', error);
    }
}

// Función para cargar portafolios
async function cargarPortafolioFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('portafolio').get();
        if (doc.exists) {
            const datos = doc.data();
            portafolios = datos.portafolios || [];
            portafoliosEstudiantes = datos.portafoliosEstudiantes || [];
            console.log('✅ Portafolios cargados desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar portafolios:', error);
        return false;
    }
}

// Función para guardar configuración
async function guardarConfiguracionFirebase() {
    try {
        await db.collection('registroAsistencia').doc('configuracion').set({
            notaAprobacion: notaAprobacion,
            valorExtra: valorExtra,
            timestamp: new Date().toISOString()
        });
        console.log('✅ Configuración guardada en Firebase');
    } catch (error) {
        console.error('❌ Error al guardar configuración:', error);
    }
}

// Función para cargar configuración
async function cargarConfiguracionFirebase() {
    try {
        const doc = await db.collection('registroAsistencia').doc('configuracion').get();
        if (doc.exists) {
            const datos = doc.data();
            notaAprobacion = datos.notaAprobacion || 70;
            valorExtra = datos.valorExtra || 2;
            console.log('✅ Configuración cargada desde Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error al cargar configuración:', error);
        return false;
    }
}

// Función para guardar todos los datos
async function guardarTodoFirebase(mostrarNotificacion = false) {
    try {
        console.log('💾 Iniciando guardado de todos los datos...');
        
        // Verificar que las variables estén disponibles
        if (typeof estudiantes === 'undefined' || typeof dias === 'undefined') {
            console.error('❌ Variables del sistema no disponibles');
            if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
                mostrarAlerta('Error: Sistema no inicializado completamente', 'error');
            }
            return false;
        }
        
        const resultados = await Promise.all([
            guardarDatosFirebase(mostrarNotificacion),
            guardarIndicadoresFirebase(),
            guardarEvaluacionFirebase(),
            guardarTareasFirebase(),
            guardarTrabajoCotidianoFirebase(),
            guardarProyectoFirebase(),
            guardarPortafolioFirebase(),
            guardarConfiguracionFirebase()
        ]);
        
        console.log('✅ Todos los datos guardados en Firebase');
        
        // Solo mostrar notificación si se solicita
        if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
            mostrarAlerta('Todos los datos guardados en la nube', 'success');
        }
        return true;
    } catch (error) {
        console.error('❌ Error al guardar todo:', error);
        if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
            mostrarAlerta('Error al guardar en la nube', 'error');
        }
        return false;
    }
}

// Función para cargar todos los datos
async function cargarTodoFirebase(mostrarNotificacion = false) {
    try {
        const resultados = await Promise.all([
            cargarDatosFirebase(),
            cargarIndicadoresFirebase(),
            cargarEvaluacionFirebase(),
            cargarTareasFirebase(),
            cargarTrabajoCotidianoFirebase(),
            cargarProyectoFirebase(),
            cargarPortafolioFirebase(),
            cargarConfiguracionFirebase()
        ]);
        
        const datosCargados = resultados.some(resultado => resultado);
        if (datosCargados) {
            console.log('✅ Datos cargados desde Firebase');
            // Solo mostrar notificación si se solicita
            if (mostrarNotificacion && typeof mostrarAlerta === 'function') {
                mostrarAlerta('Datos cargados desde la nube', 'success');
            }
        } else {
            console.log('📝 No hay datos en Firebase, usando datos locales');
        }
        return datosCargados;
    } catch (error) {
        console.error('❌ Error al cargar datos:', error);
        return false;
    }
}

// Función para sincronizar datos automáticamente
function configurarSincronizacionAutomatica() {
    // Sincronizar cada 5 segundos (muy frecuente)
    setInterval(async () => {
        try {
            // Verificar que las variables estén disponibles
            if (typeof estudiantes !== 'undefined' && typeof dias !== 'undefined') {
                await guardarTodoFirebase(false); // SIN notificaciones
                console.log('🔄 Sincronización automática ejecutada');
            }
        } catch (error) {
            console.error('❌ Error en sincronización automática:', error);
        }
    }, 5000); // Cada 5 segundos
    
    console.log('🔄 Sincronización automática configurada (cada 5 segundos)');
    
    // También sincronizar cuando el usuario sale de la página
    window.addEventListener('beforeunload', async () => {
        try {
            if (typeof estudiantes !== 'undefined' && typeof dias !== 'undefined') {
                await guardarTodoFirebase(false); // SIN notificaciones
                console.log('💾 Guardado de emergencia antes de salir');
            }
        } catch (error) {
            console.error('❌ Error en guardado de emergencia:', error);
        }
    });
    
    // Sincronizar cuando la página pierde el foco
    window.addEventListener('blur', async () => {
        try {
            if (typeof estudiantes !== 'undefined' && typeof dias !== 'undefined') {
                await guardarTodoFirebase(false); // SIN notificaciones
                console.log('💾 Guardado al cambiar de ventana');
            }
        } catch (error) {
            console.error('❌ Error en guardado al cambiar ventana:', error);
        }
    });
}

// Función para verificar conexión a Firebase
async function verificarConexionFirebase() {
    try {
        await db.collection('test').doc('test').get();
        console.log('✅ Conexión a Firebase exitosa');
        return true;
    } catch (error) {
        console.error('❌ Error de conexión a Firebase:', error);
        return false;
    }
}

// Función para inicializar Firebase automáticamente
async function inicializarFirebase() {
    try {
        console.log('🔥 Inicializando Firebase...');
        
        // Verificar conexión
        const conexionExitosa = await verificarConexionFirebase();
        
        if (conexionExitosa) {
            // Configurar sincronización automática
            configurarSincronizacionAutomatica();
            
            // Intentar cargar datos existentes
            console.log('☁️ Intentando cargar datos desde Firebase...');
            await cargarTodoFirebase(false); // SIN notificaciones
            
            console.log('🚀 Firebase inicializado correctamente');
        } else {
            console.log('⚠️ Firebase no disponible, usando almacenamiento local');
        }
    } catch (error) {
        console.error('❌ Error al inicializar Firebase:', error);
    }
}

// Función para guardado manual (con notificaciones)
async function guardarManualConNotificacion() {
    try {
        console.log('💾 Guardado manual iniciado...');
        
        // Verificar conexión
        const conexionExitosa = await verificarConexionFirebase();
        if (!conexionExitosa) {
            console.error('❌ No se pudo conectar a Firebase');
            if (typeof mostrarAlerta === 'function') {
                mostrarAlerta('Error: No se pudo conectar a Firebase', 'error');
            }
            return false;
        }
        
        // Verificar variables
        if (typeof estudiantes === 'undefined' || typeof dias === 'undefined') {
            console.error('❌ Variables del sistema no disponibles');
            if (typeof mostrarAlerta === 'function') {
                mostrarAlerta('Error: Sistema no inicializado completamente', 'error');
            }
            return false;
        }
        
        // Guardar todos los datos CON notificaciones
        const resultado = await guardarTodoFirebase(true);
        
        if (resultado) {
            console.log('✅ Guardado manual exitoso');
            return true;
        } else {
            console.error('❌ Error en guardado manual');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error en guardado manual:', error);
        if (typeof mostrarAlerta === 'function') {
            mostrarAlerta('Error al guardar datos', 'error');
        }
        return false;
    }
}

// Función para cargar manual (con notificaciones)
async function cargarManualConNotificacion() {
    try {
        console.log('📥 Carga manual iniciada...');
        
        // Verificar conexión
        const conexionExitosa = await verificarConexionFirebase();
        if (!conexionExitosa) {
            console.error('❌ No se pudo conectar a Firebase');
            if (typeof mostrarAlerta === 'function') {
                mostrarAlerta('Error: No se pudo conectar a Firebase', 'error');
            }
            return false;
        }
        
        // Cargar todos los datos CON notificaciones
        const resultado = await cargarTodoFirebase(true);
        
        if (resultado) {
            console.log('✅ Carga manual exitosa');
            return true;
        } else {
            console.log('📝 No hay datos en Firebase para cargar');
            if (typeof mostrarAlerta === 'function') {
                mostrarAlerta('No hay datos en la nube para cargar', 'info');
            }
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error en carga manual:', error);
        if (typeof mostrarAlerta === 'function') {
            mostrarAlerta('Error al cargar datos', 'error');
        }
        return false;
    }
}

// Función para forzar sincronización inmediata (sin notificaciones)
async function forzarSincronizacion() {
    try {
        console.log('🚀 Forzando sincronización inmediata...');
        
        // Verificar conexión
        const conexionExitosa = await verificarConexionFirebase();
        if (!conexionExitosa) {
            console.error('❌ No se pudo conectar a Firebase');
            return false;
        }
        
        // Verificar variables
        if (typeof estudiantes === 'undefined' || typeof dias === 'undefined') {
            console.error('❌ Variables del sistema no disponibles');
            return false;
        }
        
        // Guardar todos los datos SIN notificaciones
        const resultado = await guardarTodoFirebase(false);
        
        if (resultado) {
            console.log('✅ Sincronización forzada exitosa');
            return true;
        } else {
            console.error('❌ Error en sincronización forzada');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error en sincronización forzada:', error);
        return false;
    }
}

// Función de prueba simple para Firebase
async function probarFirebase() {
    try {
        console.log('🧪 Probando Firebase...');
        
        // Verificar conexión
        const conexionExitosa = await verificarConexionFirebase();
        if (!conexionExitosa) {
            console.error('❌ No se pudo conectar a Firebase');
            return;
        }
        
        // Probar escritura simple
        await db.collection('test').doc('sistema-principal').set({
            mensaje: 'Prueba desde sistema principal',
            timestamp: new Date().toISOString()
        });
        
        console.log('✅ Prueba de Firebase exitosa');
        
        // Intentar guardar datos si están disponibles
        if (typeof estudiantes !== 'undefined' && typeof dias !== 'undefined') {
            console.log('📊 Intentando guardar datos del sistema...');
            await guardarTodoFirebase(false); // SIN notificaciones
        } else {
            console.log('⚠️ Variables del sistema no disponibles aún');
        }
        
    } catch (error) {
        console.error('❌ Error en prueba de Firebase:', error);
    }
}

// Función para inicializar Firebase cuando el sistema esté listo
function inicializarFirebaseCuandoListo() {
    // Esperar a que las variables del sistema estén disponibles
    if (typeof estudiantes !== 'undefined' && typeof dias !== 'undefined') {
        inicializarFirebase();
    } else {
        // Reintentar en 1 segundo
        setTimeout(inicializarFirebaseCuandoListo, 1000);
    }
}

// Inicializar Firebase cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un poco más para que el sistema principal se cargue
    setTimeout(inicializarFirebaseCuandoListo, 2000);
}); 