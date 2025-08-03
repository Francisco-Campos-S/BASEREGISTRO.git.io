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
async function guardarDatosFirebase() {
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
        if (typeof mostrarAlerta === 'function') {
            mostrarAlerta('Datos guardados en la nube', 'success');
        }
    } catch (error) {
        console.error('❌ Error al guardar en Firebase:', error);
        if (typeof mostrarAlerta === 'function') {
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
async function guardarTodoFirebase() {
    try {
        await Promise.all([
            guardarDatosFirebase(),
            guardarIndicadoresFirebase(),
            guardarEvaluacionFirebase(),
            guardarTareasFirebase(),
            guardarTrabajoCotidianoFirebase(),
            guardarProyectoFirebase(),
            guardarPortafolioFirebase(),
            guardarConfiguracionFirebase()
        ]);
        console.log('✅ Todos los datos guardados en Firebase');
        mostrarAlerta('Todos los datos guardados en la nube', 'success');
    } catch (error) {
        console.error('❌ Error al guardar todo:', error);
        mostrarAlerta('Error al guardar en la nube', 'error');
    }
}

// Función para cargar todos los datos
async function cargarTodoFirebase() {
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
            mostrarAlerta('Datos cargados desde la nube', 'success');
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
    // Sincronizar cada 30 segundos
    setInterval(async () => {
        await guardarTodoFirebase();
    }, 30000);
    
    console.log('🔄 Sincronización automática configurada');
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
            await cargarTodoFirebase();
            
            console.log('🚀 Firebase inicializado correctamente');
        } else {
            console.log('⚠️ Firebase no disponible, usando almacenamiento local');
        }
    } catch (error) {
        console.error('❌ Error al inicializar Firebase:', error);
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
            await guardarTodoFirebase();
        } else {
            console.log('⚠️ Variables del sistema no disponibles aún');
        }
        
    } catch (error) {
        console.error('❌ Error en prueba de Firebase:', error);
    }
}

// Inicializar Firebase cuando se carga la página
document.addEventListener('DOMContentLoaded', inicializarFirebase); 