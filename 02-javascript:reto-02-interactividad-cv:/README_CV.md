# 📄 CV Profesional - Guía de Uso

## 🎯 Descripción

CV profesional con diseño minimalista estilo Canva, optimizado para impresión en PDF y con sistema dual de temas (claro/oscuro).

## 📁 Archivos Principales

```
cv.html          → CV en Español
cv_en.html       → CV en Inglés (English)
cv_style.css     → Estilos compartidos para ambas versiones
```

## 🚀 Inicio Rápido

### Opción 1: Abrir Directamente
```bash
# Abrir CV en español
open cv.html

# Abrir CV en inglés
open cv_en.html
```

### Opción 2: Desde el Portafolio
1. Ir a `index.html` o `index_en.html`
2. Click en botón "Descargar CV"
3. Se abre el CV en nueva pestaña

## 🎨 Funcionalidades

### 1️⃣ Cambiar Tema (Claro/Oscuro)
- **Botón:** "Tema Claro" / "Light Theme"
- **Ubicación:** Esquina superior derecha
- **Persistencia:** Se guarda tu preferencia automáticamente

### 2️⃣ Cambiar Idioma
- **Desde Español:** Click en "English"
- **Desde Inglés:** Click en "Español"
- **Mantiene:** Tu tema seleccionado al cambiar

### 3️⃣ Descargar PDF
1. Click en "Descargar PDF" / "Download PDF"
2. Esperar diálogo de impresión
3. Configurar:
   ```
   Destino: Guardar como PDF
   Diseño: Vertical (Portrait)
   Papel: A4
   Márgenes: Predeterminados
   Colores: Activar fondo
   ```
4. Guardar

### 4️⃣ Regresar al Portafolio
- **Botón:** "Volver" / "Back"
- **Destino:** 
  - Español → `index.html`
  - Inglés → `index_en.html`

## 📱 Vista en Dispositivos

### 💻 Desktop (> 820px)
- Botones con texto completo
- Layout a 2 columnas donde aplique
- Todas las características visibles

### 📱 Tablet (< 820px)
- Botones apilados verticalmente
- Solo iconos visibles
- Contenido a 1 columna

### 📱 Móvil (< 520px)
- Interfaz compacta
- Texto ajustado
- Navegación simplificada

## 🖨️ Consejos para Mejor PDF

### En Chrome/Edge:
```
1. Ctrl+P / Cmd+P
2. Destino → "Guardar como PDF"
3. Más opciones → Activar "Gráficos de fondo"
4. Guardar
```

### En Firefox:
```
1. Ctrl+P / Cmd+P
2. Imprimir usando el cuadro de diálogo del sistema
3. PDF → Guardar como PDF
4. Imprimir fondo activado
```

### En Safari:
```
1. Cmd+P
2. PDF → Guardar como PDF
3. Seleccionar destino y nombre
```

## 🎨 Personalización

### Cambiar Colores
Editar en `cv_style.css`:
```css
:root {
  --primary: #1d64f2;     /* Color principal */
  --bg: #0e1726;          /* Fondo oscuro */
  /* ... más variables */
}

[data-theme="light"] {
  --primary: #1d64f2;     /* Mantener o cambiar */
  --bg: #f8f9fa;          /* Fondo claro */
  /* ... más variables */
}
```

### Ajustar Contenido
Editar directamente en `cv.html` o `cv_en.html`:
- Modificar textos dentro de las secciones
- Agregar/eliminar items de experiencia
- Actualizar información de contacto

## 🔧 Solución de Problemas

### El PDF no muestra colores
**Solución:** Activar "Gráficos de fondo" en opciones de impresión

### El tema no se guarda
**Solución:** Verificar que JavaScript esté habilitado y localStorage disponible

### Botones no visibles en móvil
**Solución:** Los botones aparecen como iconos pequeños en esquina superior derecha

### El CV ocupa más de 2 páginas
**Solución:** Reducir contenido en secciones o ajustar márgenes de impresión

## 📊 Estructura de Contenido

```
cv.html
├── Header (Nombre + Contacto)
├── Perfil Profesional
├── Experiencia Profesional
│   ├── Analista Desarrollador (2023-Actual)
│   ├── Diseñador Full Stack (2022)
│   └── Analista de Datos (2021-2022)
├── Habilidades Técnicas
│   ├── Diseño & UI/UX
│   ├── Frontend & Programación
│   ├── Backend & Bases de Datos
│   ├── Testing & Optimización
│   └── Machine Learning
├── Proyectos Destacados
├── Educación
└── Disponibilidad + Contacto
```

## ✅ Checklist Pre-Entrega

Antes de enviar tu CV, verifica:

- [ ] Información de contacto actualizada
- [ ] Sin errores de ortografía
- [ ] Experiencia más reciente primero
- [ ] Enlaces funcionando correctamente
- [ ] PDF se genera correctamente
- [ ] Ambas versiones (ES/EN) actualizadas
- [ ] Tema se ve bien en claro y oscuro
- [ ] Responsive en móvil

## 🆘 Soporte

Si tienes problemas:
1. Revisar consola del navegador (F12)
2. Verificar que todos los archivos estén presentes
3. Probar en navegador diferente
4. Limpiar caché del navegador

## 📞 Contacto

**Arturo Flores**
- 📧 arthurr2656@email.com
- 📱 +52 561 408 8031
- 💼 [LinkedIn](https://linkedin.com/in/arturo_flores)
- 💻 [GitHub](https://github.com/ArthurFloresprogram25)

---

**Última actualización:** Diciembre 2025
**Versión:** 2.0 Professional
