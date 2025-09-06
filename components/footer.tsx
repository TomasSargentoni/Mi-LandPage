export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold font-space-grotesk text-primary">Portfolio</span>
          </div>

          <p className="text-muted-foreground font-dm-sans mb-6 max-w-md mx-auto">
            Desarrollador Full Stack apasionado por crear experiencias web excepcionales y soluciones innovadoras.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
              Inicio
            </a>
            <a href="#proyectos" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
              Proyectos
            </a>
            <a href="#habilidades" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
              Habilidades
            </a>
            <a href="#cursos" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
              Cursos
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
              Contacto
            </a>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground font-dm-sans text-sm">
              © 2024 Portfolio. Desarrollado con Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
