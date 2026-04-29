import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">Easy Studio</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> para profissionais da beleza
          </p>
        </div>
      </div>
    </footer>
  );
}