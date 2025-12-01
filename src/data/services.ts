export interface ServiceDetail {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    examples?: string[];
}

export interface Service {
    title: string;
    description: string;
    icon?: string;
    serviceSlug: string;
    detailService: ServiceDetail;
}

export const services: Record<string, Service> = {
    'identidad-web-institucional':{
        title: 'Identidad Web Institucional',
        description: 'Creamos sitios web profesionales que reflejan la identidad y valores de tu institución.',
        icon: '/icons/institution.svg',
        serviceSlug: 'identidad-web-institucional',
        detailService: {
        title: 'Identidad Web Institucional',
        description: 'Desarrollamos soluciones web completas para instituciones que buscan establecer una presencia digital sólida y profesional. Nuestros sitios están diseñados para transmitir credibilidad, facilitar la comunicación y mejorar la experiencia de sus usuarios.',
        features: [
            'Diseño personalizado alineado con la identidad corporativa',
            'Estructura de navegación intuitiva y accesible',
            'Secciones informativas sobre la institución, servicios y contacto',
            'Sistema de gestión de contenidos (CMS) para actualizaciones fáciles',
            'Integración con redes sociales',
            'Formularios de contacto y suscripción',
            'Optimización SEO para mejor visibilidad',
            'Diseño responsive para todos los dispositivos'
            ],
            benefits: [
                'Mayor credibilidad y profesionalismo online',
                'Comunicación efectiva con tu audiencia',
                'Facilidad para actualizar información',
                'Mejor posicionamiento en buscadores',
                'Accesibilidad desde cualquier dispositivo',
                'Reducción de consultas repetitivas mediante FAQ'
            ],
            examples: [
                'Sitios web para colegios y universidades',
                'Portales institucionales gubernamentales',
                'Páginas corporativas de ONGs',
                'Sitios de fundaciones y asociaciones'
            ]
        }
    },
    'sitio-web-salud': {
        title: 'Sitio Web para Salud',
        description: 'Plataformas digitales especializadas para profesionales y centros de salud.',
        icon: '/icons/health.svg',
        serviceSlug: 'sitio-web-salud',
        detailService: {
            title: 'Sitio Web para Salud',
            description: 'Desarrollamos sitios web especializados para el sector salud, cumpliendo con estándares de privacidad y accesibilidad. Facilitamos la conexión entre profesionales de la salud y sus pacientes mediante plataformas seguras y funcionales.',
            features: [
                'Sistema de reserva de citas online',
                'Información sobre especialidades médicas y servicios',
                'Perfiles de profesionales con credenciales',
                'Blog de salud y consejos médicos',
                'Formularios seguros para consultas iniciales',
                'Integración con sistemas de historias clínicas',
                'Cumplimiento de normativas de privacidad (HIPAA, GDPR)',
                'Sección de recursos educativos para pacientes'
            ],
            benefits: [
                'Reducción de tiempo administrativo en gestión de citas',
                'Mejor comunicación con pacientes',
                'Información médica accesible 24/7',
                'Aumento de la confianza del paciente',
                'Optimización de procesos administrativos',
                'Cumplimiento normativo garantizado'
            ],
            examples: [
                'Sitios web para clínicas y consultorios',
                'Portales de hospitales',
                'Páginas de médicos independientes',
                'Plataformas de centros de especialidades'
            ]
        }
    },
    'solucion-digital-educacion': {
        title: 'Solución Digital para Educación',
        description: 'Herramientas digitales para instituciones educativas y plataformas de aprendizaje.',
        icon: '/icons/education.svg',
        serviceSlug: 'solucion-digital-educacion',
        detailService: {
            title: 'Solución Digital para Educación',
            description: 'Creamos plataformas educativas completas que facilitan el proceso de enseñanza-aprendizaje. Desde sitios informativos hasta sistemas de gestión de aprendizaje (LMS), desarrollamos soluciones adaptadas a las necesidades específicas de cada institución educativa.',
            features: [
                'Sistema de gestión de cursos y estudiantes',
                'Portal de estudiantes con acceso a materiales',
                'Calendario académico integrado',
                'Sistema de calificaciones y reportes',
                'Foros y espacios de discusión',
                'Biblioteca digital de recursos',
                'Integración con plataformas de videoconferencia',
                'Panel administrativo para gestión institucional'
            ],
            benefits: [
                'Centralización de información académica',
                'Mejora en la comunicación docente-estudiante',
                'Acceso flexible al contenido educativo',
                'Reducción de procesos administrativos manuales',
                'Seguimiento detallado del progreso estudiantil',
                'Facilita el aprendizaje híbrido y a distancia'
            ],
            examples: [
                'Plataformas LMS para escuelas',
                'Sitios web de cursos online',
                'Portales educativos universitarios',
                'Sistemas de gestión para centros de formación'
            ]
        }
    }
};


// Obtiene los servicios como array para después filtrar.
export const getAllServices = (): Service[] => {
    return Object.values(services);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
    return services[slug];
};

export const getServiceSlugs = (): string[] => {
    return Object.keys(services);
};